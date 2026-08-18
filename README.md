# ArabCord

<p align="center">
  <strong>تعريب واجهة Discord وإضافة دعم RTL لعائلة Vendetta Modding</strong>
</p>

<p align="center">
  <a href="https://arabcord.dcord.us"><img src="https://img.shields.io/badge/Plugin-ArabCord-5865F2?style=for-the-badge" alt="ArabCord Plugin"></a>
  <a href="https://github.com/vendetta-mod/plugin-template"><img src="https://img.shields.io/badge/Platform-Vendetta%20%7C%20Revenge%20%7C%20Kettu-111827?style=for-the-badge" alt="Supported platforms"></a>
  <a href="https://arabcord.dcord.us"><img src="https://img.shields.io/badge/Language-Arabic%20%2B%20RTL-16A34A?style=for-the-badge" alt="Arabic and RTL"></a>
</p>

<p align="center">
  <a href="#العربية">العربية</a>
  &nbsp;•&nbsp;
  <a href="#english">English</a>
</p>

---

# العربية

## نبذة عن المشروع

**ArabCord** إضافة مفتوحة المصدر تهدف إلى تعريب نصوص واجهة Discord الرسمية على الجوال، مع تصميمها للعمل مع عائلة تطبيقات Discord Modding المبنية على Vendetta، مثل **Vendetta** و**Revenge** و**Kettu** عندما توفر واجهة `@vendetta` المتوافقة.

تركّز الإضافة على ترجمة واجهة التطبيق نفسها، وليس رسائل المستخدمين أو أسماء الحسابات أو الروابط. وتستخدم عدة مسارات احتياطية لأن Discord قد يغيّر طريقة تحميل الوحدات أو طريقة إنشاء النصوص بين إصدار وآخر.

> **الحالة الحالية:** الترجمة مفعّلة افتراضيًا. أما RTL فهو خيار تجريبي **مغلق افتراضيًا** ويمكن تفعيله يدويًا من إعدادات ArabCord تحت اسم **تفعيل RTL (BETA)**.

## المزايا

| الميزة | التفاصيل |
|---|---|
| تعريب الواجهة | ترجمة عبارات Discord الرسمية الشائعة إلى العربية، بما في ذلك الإعدادات والقنوات والرسائل والملفات الشخصية وبعض صفحات النظام. |
| حماية النصوص | عدم ترجمة محتوى المستخدمين، وأسماء المستخدمين، والروابط، وكتل الكود، والقيم الديناميكية غير المعروفة. |
| منع الترجمة الجزئية | حماية العبارات من صيغ هجينة مثل `إرسالing` أو `صديقs` عبر المطابقة الكاملة والأنماط الآمنة. |
| العبارات المركبة | دعم الجمل التي تحتوي على placeholders وعدادات متغيرة مثل `boosts` و`Online` مع الحفاظ على الأرقام. |
| الترجمة أثناء التشغيل | اعتراض مسارات الواجهة المتاحة أثناء تشغيل Discord، مع فحص دوري للوحدات التي تتأخر في التحميل. |
| RTL تجريبي | مسار RTL محدود يمكن تجربته يدويًا، لكنه لا يُفرض عند التثبيت الجديد حتى لا يؤثر في التخطيط المستقر. |
| توافق الإضافات | بنية manifest وentrypoint متوافقة مع أسلوب إضافات Vendetta وعائلة Revenge وKettu. |

## ما الذي تتم ترجمته؟

يحتوي القاموس على عدد كبير من العبارات التي تظهر في واجهة Discord، ومنها على سبيل المثال: **You، Get Nitro، Add Friends، Invite Members، Text Channel، Category، About Me، Member Since، Media، Pins، Files، Poll، Copy Text، Channels & Roles، Community Server، Edit Per-server Profile، Browse Channels، Voice Call، Video Call، Copy Username، QR Code، Share Invite، Suggested Friends، Add Status، Developer Mode، Advanced Settings، LaunchPad** وغيرها.

يتم التعامل مع العدادات والجمل التي تحتوي على قيم متغيرة بحذر. لا تُترجم الكلمات القصيرة داخل كلمات أطول، ولا تُعدّل القيم التي لا يتعرف عليها المحرك، وذلك لتقليل احتمال تغيير محتوى المستخدم أو كسر placeholders الخاصة بـ Discord.

## RTL: الوضع الحالي

كانت الإصدارات التجريبية السابقة تحاول تطبيق RTL على عدد كبير من عناصر React Native، لكن هذا الأسلوب قد يسبب تحريك بعض العناصر أو إخفاء أيقونات شريط الخوادم بسبب اختلاف الحاويات والتموضع المطلق بين إصدارات Discord. لذلك أعاد ArabCord الوضع المستقر: **RTL مغلق افتراضيًا**.

عند تفعيل الخيار يدويًا، يستخدم ArabCord patch محدودًا للعناصر التي يمكن التعرف عليها، مع إبقاء `Switch` و`Checkbox` والعناصر الأصلية الحساسة باتجاه `LTR` داخل مسارها حتى لا تخرج علامة الصح أو المقبض من مكانه. قد تتطلب بعض الشاشات إعادة فتحها أو إعادة تشغيل Discord.

> لا يُعد خيار RTL حلًا نهائيًا لكل تخطيطات Discord. إنه مسار **BETA** للتجربة وجمع الملاحظات، بينما تظل الترجمة مستقلة عنه وتعمل افتراضيًا.

## التثبيت من رابط الاستضافة

رابط الإضافة الرسمي هو:

```text
https://arabcord.dcord.us
```

اتبع الخطوات التالية:

1. انسخ الرابط `https://arabcord.dcord.us`.
2. افتح Discord ثم اذهب إلى **Settings** ثم **Plugins**.
3. اضغط على علامة **+** لبدء إضافة Plugin.
4. الصق الرابط واضغط **Install**.
5. إذا ظهر طلب تأكيد، اضغط **Install** مرة أخرى.
6. أعد تشغيل تطبيق Discord.

بعد التثبيت، افتح إعدادات ArabCord للتأكد من أن الترجمة مفعّلة. ستجد خيار **تفعيل RTL (BETA)** مغلقًا افتراضيًا؛ لا تفعّله إلا إذا كنت تريد تجربة الاتجاه التجريبي.

### ملاحظة مهمة للاستضافة اليدوية

يجب أن يشير الرابط إلى **المجلد الأساسي** الذي يحتوي على `manifest.json`، وليس إلى ملف manifest نفسه. إذا كانت ملفات التوزيع مرفوعة إلى جذر النطاق، فيجب أن تكون المسارات كما يلي:

```text
https://example.com/manifest.json
https://example.com/index.js
```

ولا تستخدم الرابط التالي داخل مدير الإضافات:

```text
https://example.com/manifest.json
```

لأن مدير الإضافات قد يحاول إضافة `manifest.json` مرة أخرى إلى الرابط. يُفضّل استخدام HTTPS، والتأكد من أن الاستضافة تعيد `200 OK` و`Content-Type` مناسبًا، وتسمح بطلبات CORS عند الحاجة.

## الإعدادات

| الإعداد | القيمة الافتراضية | الوصف |
|---|---:|---|
| تفعيل ArabCord | مفعّل | تشغيل أو إيقاف الإضافة بالكامل. |
| تفعيل RTL (BETA) | مغلق | تشغيل patch RTL المحدود يدويًا. |
| ترجمة discord-intl | مفعّل | المسار الرئيسي لترجمة نصوص Discord الرسمية. |
| ترجمة خرائط Messages | مفعّل | مسار احتياطي للنصوص التي تُقرأ من خرائط `Messages`. |

عند التحديث من إصدار قديم كان يحفظ RTL مفعّلًا، يقوم الإصدار الحالي بتعطيله مرة واحدة لاستعادة السلوك المستقر. بعد ذلك يمكنك تفعيله يدويًا من الإعدادات، وسيبقى اختيارك محفوظًا.

## البنية التقنية

يعتمد ArabCord على دورة حياة الإضافة المعتادة في Vendetta، ويضع عمليات الاعتراض داخل قائمة يمكن إزالتها عند `onUnload`. وتشمل البنية الحالية ما يلي:

```text
Discord UI
   │
   ├── discord-intl: intl.string / intl.format
   │
   ├── Messages maps: مسار ترجمة احتياطي
   │
   ├── React Native live patch: مسار RTL التجريبي فقط
   │
   └── Translation engine
          ├── exact phrase matching
          ├── safe UI phrase matching
          ├── placeholder protection
          └── dynamic counter patterns
```

| الملف | الدور |
|---|---|
| `plugins/arabcord/manifest.json` | بيانات الإضافة واسم المؤلف والمعرّف وentrypoint. |
| `plugins/arabcord/src/index.tsx` | دورة الحياة، اعتراض الوحدات، الإعدادات، ومسار RTL التجريبي. |
| `plugins/arabcord/src/translation.ts` | القاموس ومحرك الترجمة والمطابقة الآمنة. |
| `tests/translation.test.mjs` | اختبارات الكلمات والعبارات والعدادات والـ placeholders. |
| `build.mjs` | بناء bundle وإنتاج manifest يحتوي على SHA-256. |

## المؤلف والبيانات التعريفية

| الحقل | القيمة |
|---|---|
| Author | `S.N.T` |
| ID | `1444349574859980881` |
| Plugin name | `ArabCord` |
| Hosting | `https://arabcord.dcord.us` |

## البناء محليًا

من داخل مجلد الإضافة:

```bash
pnpm install
pnpm build
```

ينتج البناء الملفات التالية:

```text
dist/arabcord/index.js
dist/arabcord/manifest.json
```

يُعاد حساب SHA-256 لملف `index.js` ووضعه داخل manifest تلقائيًا.

## الاختبارات

تشغّل اختبارات الترجمة عبر:

```bash
pnpm test:translation
```

ويُفضّل إجراء فحص TypeScript وفحص JavaScript بعد البناء:

```bash
pnpm exec tsc --noEmit
node --check dist/arabcord/index.js
```

تغطي الاختبارات حماية المطابقة الكاملة، ومنع الترجمة الجزئية، والعدادات الديناميكية، والـ placeholders، والروابط، وبعض العبارات المستخرجة من لقطات واجهة Discord.

## استكشاف الأخطاء

إذا فشل تثبيت الإضافة، تأكد من استخدام رابط المجلد الأساسي، ومن أن `manifest.json` متاح مباشرة عبر HTTPS. إذا ظهرت نسخة قديمة بعد رفع ملفات جديدة، احذف ArabCord من Discord ثم ثبّته مجددًا، وتحقق من أن hash الموجود في manifest تغيّر.

إذا كانت الترجمة تعمل لكن RTL لا يظهر، فهذا متوقع في الوضع الافتراضي الجديد؛ افتح إعدادات ArabCord وتحقق من خيار **تفعيل RTL (BETA)**. وإذا أدى تفعيله إلى اضطراب التخطيط، أوقف الخيار وأعد تشغيل Discord، ثم أرسل لقطة شاشة ومعلومات إصدار Discord واسم الـ mod المستخدم.

## المساهمة

يمكن اقتراح ترجمات جديدة أو الإبلاغ عن مشكلة عبر Issue يتضمن العبارة الإنجليزية كما تظهر حرفيًا، ومكان ظهورها، وإصدار Discord، واسم الـ mod، ولقطة شاشة عند الحاجة. يُفضّل عدم إرفاق رسائل خاصة أو بيانات حساب شخصية.

## الترخيص والملاحظات

هذا المشروع لا ينسخ ملفات ترجمة Discord؛ بل يستخدم قاموس ArabCord الأصلي ويعترض واجهات runtime المتاحة داخل العميل. يجب إضافة ترخيص صريح للمشروع قبل النشر العام، ومراجعة تراخيص أي قاموس أو أصل خارجي تتم إضافته مستقبلًا.

---

# English

## About the project

**ArabCord** is an open-source mobile Discord UI localization plugin for the Vendetta modding ecosystem. It is designed to work with **Vendetta**, **Revenge**, and **Kettu** when they expose a compatible `@vendetta` API.

The plugin focuses on Discord’s own interface strings rather than user content. It does not intentionally translate user messages, usernames, links, or code blocks. Because Discord can change its Metro modules and runtime structure between releases, ArabCord uses several translation paths with fallbacks.

> **Current status:** Translation is enabled by default. RTL is an experimental feature, **disabled by default**, and can be enabled manually through the ArabCord setting named **Enable RTL (BETA)**.

## Features

| Feature | Details |
|---|---|
| Arabic UI localization | Translates a broad set of common Discord interface strings, including settings, channels, messages, profiles, and system screens. |
| Content protection | Avoids translating user content, usernames, links, code blocks, and unknown dynamic values. |
| Partial-translation protection | Uses exact matching and safe patterns to prevent hybrid output such as `إرسالing` or `صديقs`. |
| Compound phrases | Supports UI sentences containing placeholders and dynamic counters such as `boosts` and `Online` while preserving numbers. |
| Live translation | Hooks available UI paths while Discord is running and periodically checks for late-loaded modules. |
| Experimental RTL | Provides a limited RTL patch that can be enabled manually, without forcing layout changes on a fresh installation. |
| Mod compatibility | Uses the manifest and entrypoint conventions expected by Vendetta-style plugins and compatible Revenge/Kettu environments. |

## Translated interface coverage

The dictionary includes many phrases found throughout Discord’s mobile UI, including **You, Get Nitro, Add Friends, Invite Members, Text Channel, Category, About Me, Member Since, Media, Pins, Files, Poll, Copy Text, Channels & Roles, Community Server, Edit Per-server Profile, Browse Channels, Voice Call, Video Call, Copy Username, QR Code, Share Invite, Suggested Friends, Add Status, Developer Mode, Advanced Settings, LaunchPad**, and more.

Dynamic counters and compound sentences are handled conservatively. Short words are not replaced inside longer words, and unknown values are preserved to reduce the risk of modifying user content or breaking Discord placeholders.

## RTL status

Earlier experimental builds attempted to apply RTL to a large number of React Native elements. That approach could move controls or hide server rail icons because Discord uses different container structures and absolute-positioning rules across releases. The stable behavior has therefore been restored: **RTL is disabled by default**.

When manually enabled, ArabCord uses a limited patch for recognizable elements. Native controls such as `Switch` and `Checkbox` remain `LTR` inside their surrounding row so their thumb or check mark stays within the original track. Some screens may require reopening or restarting Discord.

> RTL is not currently a universal solution for every Discord layout. It is a **BETA** feature intended for experimentation and feedback, while translation remains independent and enabled by default.

## Installation

The official hosted plugin URL is:

```text
https://arabcord.dcord.us
```

Follow these steps:

1. Copy `https://arabcord.dcord.us`.
2. Open Discord and go to **Settings**, then **Plugins**.
3. Press the **+** button to add a plugin.
4. Paste the URL and press **Install**.
5. If a confirmation dialog appears, press **Install** again.
6. Restart the Discord app.

After installation, open ArabCord settings and confirm that translation is enabled. The **Enable RTL (BETA)** switch is disabled by default and should only be enabled when you want to test the experimental layout behavior.

### Manual hosting note

The plugin manager expects the **base directory URL** containing `manifest.json`, not the manifest file URL itself. If the distribution files are uploaded to the domain root, these paths must be available:

```text
https://example.com/manifest.json
https://example.com/index.js
```

Do not paste this into the plugin manager:

```text
https://example.com/manifest.json
```

The manager may append `manifest.json` again and request an invalid path. HTTPS is recommended. The host should return `200 OK`, the correct content types, and allow CORS requests when required by the mod loader.

## Settings

| Setting | Default | Description |
|---|---:|---|
| Enable ArabCord | Enabled | Enables or disables the entire plugin. |
| Enable RTL (BETA) | Disabled | Manually enables the limited experimental RTL patch. |
| Translate discord-intl | Enabled | Main path for translating official Discord interface strings. |
| Translate Messages maps | Enabled | Fallback path for strings read from `Messages` maps. |

When upgrading from an older build that persisted RTL as enabled, the current release disables it once to restore the stable behavior. You can then enable it manually from settings, and your choice will be persisted.

## Technical architecture

ArabCord follows the standard Vendetta-style plugin lifecycle and stores patches in an unloader list that is cleaned up during `onUnload`. The current architecture is:

```text
Discord UI
   │
   ├── discord-intl: intl.string / intl.format
   │
   ├── Messages maps: translation fallback
   │
   ├── React Native live patch: experimental RTL only
   │
   └── Translation engine
          ├── exact phrase matching
          ├── safe UI phrase matching
          ├── placeholder protection
          └── dynamic counter patterns
```

| File | Purpose |
|---|---|
| `plugins/arabcord/manifest.json` | Plugin metadata, author identity, and entrypoint. |
| `plugins/arabcord/src/index.tsx` | Lifecycle, module hooks, settings, and experimental RTL path. |
| `plugins/arabcord/src/translation.ts` | Translation dictionary, matching engine, and safety rules. |
| `tests/translation.test.mjs` | Tests for phrases, counters, placeholders, and partial-match protection. |
| `build.mjs` | Bundles the plugin and writes the SHA-256 hash into the manifest. |

## Author and metadata

| Field | Value |
|---|---|
| Author | `S.N.T` |
| ID | `1444349574859980881` |
| Plugin name | `ArabCord` |
| Hosting | `https://arabcord.dcord.us` |

## Local development

From the plugin directory:

```bash
pnpm install
pnpm build
```

The build produces:

```text
dist/arabcord/index.js
dist/arabcord/manifest.json
```

The SHA-256 hash of `index.js` is calculated automatically and written into the manifest.

## Testing

Run the translation test suite with:

```bash
pnpm test:translation
```

It is recommended to run TypeScript and JavaScript checks after building:

```bash
pnpm exec tsc --noEmit
node --check dist/arabcord/index.js
```

The tests cover exact phrase matching, partial-translation protection, dynamic counters, placeholders, links, and selected phrases extracted from Discord UI screenshots.

## Troubleshooting

If installation fails, verify that you are using the base directory URL and that `manifest.json` is directly reachable over HTTPS. If an old build continues to appear after uploading new files, remove ArabCord from Discord, reinstall it, and confirm that the manifest hash has changed.

If translation works but RTL does not appear, this is expected with the new default. Open ArabCord settings and check **Enable RTL (BETA)**. If enabling it causes layout problems, turn it off, restart Discord, and report the Discord version, the mod name, and a screenshot of the affected screen.

## Contributing

When reporting a missing translation or a bug, include the exact English phrase, where it appears, the Discord version, the mod name, and a screenshot when useful. Do not include private messages or personal account information.

## License and notes

ArabCord does not copy Discord translation files. It uses an original ArabCord dictionary and hooks runtime interfaces exposed by the client. Add an explicit project license before public distribution, and review the licenses of any external dictionary or asset added in the future.

---

## References

[1]: https://plugindocs.nexpid.xyz/guides/manifest "Vendetta Plugin Docs — Manifest"
[2]: https://plugindocs.nexpid.xyz/guides/plugin-entrypoint "Vendetta Plugin Docs — Plugin entrypoint"
[3]: https://github.com/vendetta-mod/plugin-template "Vendetta Plugin Template"
[4]: https://github.com/nexpid/RevengePlugins "RevengePlugins"
[5]: https://github.com/revenge-mod/revenge-bundle "Revenge bundle"
[6]: https://github.com/discord/discord-intl "Discord Intl"
[7]: https://github.com/revenge-mod/revenge-bundle/blob/main/src/core/vendetta/plugins.ts "Revenge plugin loader"
