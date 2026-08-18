import { findByProps } from "@vendetta/metro";
import { React, ReactNative as RN } from "@vendetta/metro/common";
import { after } from "@vendetta/patcher";
import { storage } from "@vendetta/plugin";
import { useProxy } from "@vendetta/storage";
import { Forms, General } from "@vendetta/ui/components";
import { translateRecord, translateUiText, translateKnownUiText, translateUiPropText } from "./translation";

type ArabCordStorage = {
  enabled?: boolean;
  rtl?: boolean;
  rtlBetaDefaultApplied?: boolean;
  translateIntl?: boolean;
  translateMessageMaps?: boolean;
};

type Unload = () => unknown;

const settings = storage as ArabCordStorage;
const unloaders: Unload[] = [];
let rtlManager: any;
let previousRtl: boolean | undefined;
let previousSwap: boolean | undefined;
let patched = false;
let patchScanTimer: ReturnType<typeof setInterval> | undefined;
let intlPatchedModule: any;
let messageMapPatchedModule: any;

function safeFindByProps(...props: string[]): any | undefined {
  try {
    return findByProps(...props);
  } catch {
    return undefined;
  }
}

function getIntlModule(): any | undefined {
  const candidates = [
    safeFindByProps("intl", "t"),
    safeFindByProps("intl", "string"),
    safeFindByProps("string", "format"),
    safeFindByProps("string", "formatToPlainString"),
    safeFindByProps("formatMessage"),
    safeFindByProps("runtimeHashMessageKey"),
  ];
  for (const candidate of candidates) {
    if (!candidate) continue;
    if (candidate.intl && typeof candidate.intl === "object") return candidate;
    if (["string", "format", "formatToPlainString", "formatMessage", "t"].some(key => typeof candidate[key] === "function")) {
      return { intl: candidate };
    }
  }
  return undefined;
}

function translateResult(value: unknown): unknown {
  if (typeof value === "string") return translateKnownUiText(value);
  if (Array.isArray(value)) return value.map(part => translateResult(part));
  if (value && typeof value === "object") {
    const element = value as { props?: Record<string, any> };
    if (element.props && typeof React.cloneElement === "function") {
      const props = { ...element.props };
      props.children = Array.isArray(props.children)
        ? props.children.map((child: unknown) => typeof child === "string" ? translateKnownUiText(child) : child)
        : typeof props.children === "string" ? translateKnownUiText(props.children) : props.children;
      for (const key of ["label", "subLabel", "title", "description", "accessibilityLabel", "placeholder"]) {
        if (typeof props[key] === "string") props[key] = translateUiPropText(props[key]);
      }
      try {
        return (React as any).cloneElement(value, props);
      } catch {
        return value;
      }
    }
  }
  return value;
}

function patchIntl(intlModule: any): void {
  const intl = intlModule?.intl && typeof intlModule.intl === "object" ? intlModule.intl : intlModule;
  if (!intl || typeof intl !== "object" || intlPatchedModule === intlModule) return;
  intlPatchedModule = intlModule;

  for (const method of ["string", "format", "formatToPlainString", "formatMessage", "t"]) {
    if (typeof intl[method] !== "function") continue;
    try {
      unloaders.push(after(method, intl, (_args: unknown[], result: unknown) => translateResult(result)));
    } catch (error) {
      console.warn(`[ArabCord] Unable to patch intl.${method}`, error);
    }
  }
}

function patchMessageMaps(): void {
  if (!settings.translateMessageMaps) return;
  let module: any;
  module = safeFindByProps("Messages");
  const container = module?.Messages ? module : module?.default?.Messages ? module.default : undefined;
  const original = container?.Messages;
  if (!container || !original || typeof original !== "object" || messageMapPatchedModule === container) return;
  try {
    container.Messages = translateRecord(original);
    messageMapPatchedModule = container;
    unloaders.push(() => {
      container.Messages = original;
      if (messageMapPatchedModule === container) messageMapPatchedModule = undefined;
    });
  } catch (error) {
    console.warn("[ArabCord] Unable to wrap the Discord Messages map", error);
  }
}

function mapUiChild(value: unknown): unknown {
  if (typeof value === "string") return translateKnownUiText(value);
  if (Array.isArray(value)) return value.map(mapUiChild);
  return value;
}

function collectUiText(value: unknown, output: string[] = []): string[] {
  if (typeof value === "string") output.push(value);
  else if (Array.isArray(value)) value.forEach(item => collectUiText(item, output));
  else if (value && typeof value === "object") {
    const element = value as { props?: { children?: unknown } };
    if (element.props) collectUiText(element.props.children, output);
  }
  return output;
}

function hasUiText(value: unknown, pattern: RegExp): boolean {
  return collectUiText(value).some(text => pattern.test(text));
}

function translateUiProps(props: Record<string, any>): Record<string, any> {
  const next = { ...props };
  // Only known UI strings are translated here; arbitrary message children are
  // left untouched so user-generated content is never rewritten.
  next.children = mapUiChild(next.children);
  for (const key of ["placeholder", "label", "subLabel", "title", "description", "accessibilityLabel", "header"]) {
    if (typeof next[key] === "string") next[key] = translateUiPropText(next[key]);
  }
  return next;
}

function patchLateModules(): void {
  if (!patched) return;
  if (settings.translateIntl) {
    const intlModule = getIntlModule();
    if (intlModule) patchIntl(intlModule);
  }
  patchMessageMaps();
}

function styleArray(style: unknown, rtlStyle: Record<string, unknown>): unknown[] {
  const styles = Array.isArray(style) ? style : [style];
  return [...styles.filter(Boolean), rtlStyle];
}

function componentName(type: unknown): string {
  if (typeof type === "string") return type;
  if (typeof type === "function" || (typeof type === "object" && type !== null)) {
    const component = type as { displayName?: string; name?: string };
    return component.displayName ?? component.name ?? "";
  }
  return "";
}

function isOneOf(type: unknown, values: unknown[]): boolean {
  return values.some(value => value != null && type === value);
}

function patchLiveRtl(): void {
  const react = React as any;
  if (!react || typeof react.createElement !== "function" || typeof react.cloneElement !== "function") return;

  const textTypes = [RN.Text, RN.TextInput, (General as any).Text, (Forms as any).FormText];
  const layoutTypes = [
    RN.View,
    RN.ScrollView,
    RN.FlatList,
    RN.SectionList,
    RN.VirtualizedList,
    RN.Pressable,
    RN.TouchableOpacity,
    RN.TouchableHighlight,
    RN.TouchableWithoutFeedback,
  ];
  const controlTypes = [(RN as any).Switch, (RN as any).Checkbox];

  const transform = (type: unknown, result: any, canClone = true): any => {
    const finish = (props: Record<string, any>) => canClone ? react.cloneElement(result, props) : { ...result, props };
    if (!result?.props) return result;
    const name = componentName(type);
    const textLike =
      isOneOf(type, textTypes) || /^(?:Themed)?Text(?:Input)?$|Typography|Heading|BodyText|FormText/i.test(name);
    const layoutLike =
      isOneOf(type, layoutTypes) || /^(?:ScrollView|FlatList|SectionList|VirtualizedList|Pressable|Touchable)/i.test(name);
    const serverRailLike =
      /(?:GuildSidebar|GuildList|ServerList|ServerRail|NavigationRail|GuildIcon|ServerIcon|GuildItem|ServerItem|GuildScroller|GuildsScroller)/i.test(name);
    const serverRailContainerLike =
      /(?:GuildSidebar|GuildList|ServerList|ServerRail|NavigationRail|GuildScroller|GuildsScroller)/i.test(name);
    const statusLike =
      /(?:Status|ProfileStatus|StatusBubble|AddStatus)/i.test(name) ||
      hasUiText(result.props?.children, /^\s*(?:Add status|Add Status)\s*$/i);
    const rowLike =
      /(?:SwitchRow|FormSwitch|SettingRow|FormRow|ListRow|ChannelRow|MessageRow|GuildRow|TabBar|Header|Navigation|Status|Trigger|Toggle|Segment|Pill)/i.test(name) ||
      statusLike;
    const triggerLike =
      /(?:Trigger|Toggle|Segment|Pill|Checkbox|Radio|Option|SwitchRow|FormSwitch|Boolean)/i.test(name) ||
      hasUiText(result.props?.children, /^\s*(?:True|False|On|Off|Enabled|Disabled)\s*$/i);
    const controlLike = isOneOf(type, controlTypes) || /^(?:Switch|Checkbox|Radio)$/i.test(name);
    if (!textLike && !layoutLike && !rowLike && !serverRailLike && !controlLike) return result;

    const nextProps = translateUiProps(result.props);
    let existing: Record<string, any> = {};
    try {
      existing = (RN as any).StyleSheet?.flatten?.(nextProps.style) ?? nextProps.style ?? {};
    } catch {
      existing = {};
    }
    if (textLike && settings.rtl) {
      nextProps.style = styleArray(nextProps.style, {
        direction: "rtl",
        writingDirection: "rtl",
        textAlign: existing.textAlign ?? "right",
      });
    } else if (settings.rtl && (layoutLike || rowLike || serverRailLike || controlLike)) {
      // The row is RTL, but the native control must stay LTR. Applying RTL
      // directly to Switch/Checkbox is what makes the thumb/check escape.
      if (controlLike) {
        nextProps.style = styleArray(nextProps.style, {
          direction: "ltr",
          flexDirection: "row",
        });
        return finish(nextProps);
      }

      const currentDirection = existing.flexDirection;
      const isHorizontal = currentDirection === "row" || currentDirection === "row-reverse";
      const isNarrowAbsoluteRail =
        (existing.position === "absolute" || existing.position === "fixed") &&
        existing.left === 0 &&
        typeof existing.width === "number" &&
        existing.width <= 120;
      const rtlLayout: Record<string, unknown> = {
        direction: "rtl",
        ...(triggerLike || statusLike || isHorizontal
          ? { flexDirection: currentDirection === "row-reverse" ? "row" : "row-reverse" }
          : {}),
      };
      if ((serverRailContainerLike || isNarrowAbsoluteRail) && (existing.position === "absolute" || existing.position === "fixed")) {
        rtlLayout.left = undefined;
        rtlLayout.right = existing.right ?? 0;
      }
      nextProps.style = styleArray(nextProps.style, rtlLayout);
      if (nextProps.contentContainerStyle != null) {
        nextProps.contentContainerStyle = styleArray(nextProps.contentContainerStyle, {
          direction: "rtl",
          ...(serverRailContainerLike ? { flexDirection: "column" } : {}),
        });
      }
    }
    return finish(nextProps);
  };

  try {
    unloaders.push(
      after("createElement", react, (args: unknown[], result: any) => transform(args[0], result, true)),
      after("cloneElement", react, (args: unknown[], result: any) => transform(result?.type ?? args[0], result, false)),
    );
  } catch (error) {
    console.warn("[ArabCord] Unable to install live RTL element patch", error);
  }
}

function applyRtl(): void {
  if (!settings.rtl) return;
  let manager: any;
  try {
    const reactNative = RN as any;
    manager = reactNative?.I18nManager;
    if (!manager || typeof manager.forceRTL !== "function") {
      manager = findByProps("allowRTL", "forceRTL");
    }
  } catch {
    manager = undefined;
  }

  if (manager) {
    rtlManager = manager;
    previousRtl = typeof manager.isRTL === "boolean" ? manager.isRTL : undefined;
    previousSwap =
      typeof manager.doLeftAndRightSwapInRTL === "boolean" ? manager.doLeftAndRightSwapInRTL : undefined;
    try {
      manager.allowRTL?.(true);
      manager.forceRTL(true);
      manager.swapLeftAndRightInRTL?.(true);
    } catch (error) {
      console.warn("[ArabCord] Unable to enable React Native RTL", error);
    }
  }

  // I18nManager applies forceRTL on the next app start. This patch makes new
  // elements respect RTL immediately, including screens that do not remount.
  patchLiveRtl();
}

function restoreRtl(): void {
  if (!rtlManager) return;
  try {
    if (previousRtl !== undefined) {
      rtlManager.allowRTL?.(previousRtl);
      rtlManager.forceRTL?.(previousRtl);
    }
    if (previousSwap !== undefined) rtlManager.swapLeftAndRightInRTL?.(previousSwap);
  } catch (error) {
    console.warn("[ArabCord] Unable to restore the previous RTL setting", error);
  } finally {
    rtlManager = undefined;
    previousRtl = undefined;
    previousSwap = undefined;
  }
}

export function enableArabCord(): void {
  if (patched || settings.enabled === false) return;
  settings.enabled = true;
  settings.rtl ??= false;
  settings.translateIntl ??= true;
  settings.translateMessageMaps ??= true;

  if (settings.translateIntl) {
    const intlModule = getIntlModule();
    if (intlModule) patchIntl(intlModule);
  }
  patchMessageMaps();
  applyRtl();
  patched = true;
  patchScanTimer = setInterval(patchLateModules, 1200);
}

export function disableArabCord(): void {
  if (patchScanTimer !== undefined) {
    clearInterval(patchScanTimer);
    patchScanTimer = undefined;
  }
  while (unloaders.length > 0) {
    const unload = unloaders.pop();
    try {
      unload?.();
    } catch (error) {
      console.warn("[ArabCord] Failed to remove a patch", error);
    }
  }
  restoreRtl();
  intlPatchedModule = undefined;
  messageMapPatchedModule = undefined;
  patched = false;
}

function setSetting(key: keyof ArabCordStorage, value: boolean): void {
  settings[key] = value;
  if (key === "enabled") {
    if (value) enableArabCord();
    else disableArabCord();
  }
  if ((key === "rtl" || key === "translateIntl" || key === "translateMessageMaps") && patched) {
    disableArabCord();
    enableArabCord();
  }
}

const { FormSwitchRow, FormText } = Forms;
const { Text } = General;

export function Settings() {
  useProxy(settings as Record<string, unknown>);
  const [, forceUpdate] = React.useReducer((value: number) => value + 1, 0);
  const enabled = settings.enabled !== false;
  const rtl = settings.rtl === true;
  const translateIntl = settings.translateIntl !== false;
  const translateMessageMaps = settings.translateMessageMaps !== false;

  const update = (key: keyof ArabCordStorage, value: boolean) => {
    setSetting(key, value);
    forceUpdate();
  };

  return (
    <RN.ScrollView>
      <FormText style={{ paddingHorizontal: 16, paddingTop: 16 }}>
        ArabCord يضيف العربية إلى واجهة Discord ويطبّق اتجاه RTL على مستوى React Native عند توفره.
      </FormText>
      <FormSwitchRow
        label="تفعيل ArabCord"
        subLabel="ترجمة ناتج discord-intl وخرائط Messages المحلية"
        value={enabled}
        onValueChange={(value: boolean) => update("enabled", value)}
      />
      <FormSwitchRow
        label="تفعيل RTL (BETA)"
        subLabel="تجريبي: يُطبّق RTL على العناصر الجديدة؛ قد تتطلب بعض الشاشات إعادة فتحها أو إعادة تشغيل Discord"
        value={rtl}
        onValueChange={(value: boolean) => update("rtl", value)}
      />
      <FormSwitchRow
        label="ترجمة discord-intl"
        subLabel="المسار الرئيسي لترجمة نصوص واجهة Discord الرسمية"
        value={translateIntl}
        onValueChange={(value: boolean) => update("translateIntl", value)}
      />
      <FormSwitchRow
        label="ترجمة خرائط Messages"
        subLabel="مسار احتياطي للنصوص التي تُقرأ مباشرة من Messages"
        value={translateMessageMaps}
        onValueChange={(value: boolean) => update("translateMessageMaps", value)}
      />
      <Text style={{ padding: 16, opacity: 0.7 }}>
        المحتوى الذي يكتبه المستخدمون والروابط وأسماء المستخدمين لا يُترجم تلقائيًا حفاظًا على المعنى والخصوصية.
      </Text>
    </RN.ScrollView>
  );
}

export function onLoad(): void {
  settings.enabled ??= true;
  // Disable persisted RTL once on upgrade so the stable translation-only
  // behavior is restored safely. Manual enabling remains persistent afterward.
  if (settings.rtlBetaDefaultApplied !== true) {
    settings.rtl = false;
    settings.rtlBetaDefaultApplied = true;
  }
  settings.rtl ??= false;
  settings.translateIntl ??= true;
  settings.translateMessageMaps ??= true;
  if (settings.enabled) enableArabCord();
}

export function onUnload(): void {
  disableArabCord();
}

export default {
  onLoad,
  onUnload,
  settings: Settings,
};
