import assert from "node:assert/strict";
import { translateUiText } from "./translation.mjs";

assert.equal(translateUiText("Search"), "بحث");
assert.equal(translateUiText("No results found"), "لم يتم العثور على نتائج");
assert.equal(translateUiText("12 messages"), "12 رسائل");
assert.equal(translateUiText("1 member"), "1 عضو");
assert.equal(
  translateUiText("Open https://discord.com/channels/1/2 and {count} messages"),
  "فتح https://discord.com/channels/1/2 and {count} الرسائل",
);
assert.equal(translateUiText("`Search`"), "`Search`");
assert.equal(translateUiText("```Search```"), "```Search```");
assert.equal(translateUiText("Mystery custom server label"), "Mystery custom server label");
assert.equal(translateUiText("Security Keys"), "مفاتيح الأمان");
assert.equal(translateUiText("Remove Authenticator App"), "إزالة تطبيق المصادقة");
assert.equal(translateUiText("Your account is limited"), "حسابك مقيّد");
assert.equal(translateUiText("Active violations — 5"), "المخالفات النشطة — 5");
assert.equal(translateUiText("Expired violations — 0"), "المخالفات المنتهية — 0");
assert.equal(translateUiText("0 added"), "0 مضافة");
assert.equal(translateUiText("Content & Social"), "المحتوى والتواصل الاجتماعي");
assert.equal(translateUiText("Filter from non-friends"), "تصفية الرسائل من غير الأصدقاء");
assert.equal(translateUiText("Age-restricted commands"), "الأوامر المقيّدة عمريًا");
assert.equal(translateUiText("App Settings"), "إعدادات التطبيقات");
assert.equal(translateUiText("Web Browser"), "متصفح الويب");
assert.equal(translateUiText("Sending..."), "جارٍ الإرسال...");
assert.equal(translateUiText("Sending…"), "جارٍ الإرسال…");
assert.equal(translateUiText("Sending"), "جارٍ الإرسال");
assert.equal(translateUiText("Use data to improve Discord"), "استخدام البيانات لتحسين ديسكورد");
assert.equal(translateUiText("Request all of my data"), "طلب جميع بياناتي");
assert.equal(translateUiText("persistent verification codes"), "رموز التحقق الدائمة");
assert.equal(translateUiText("Policies & disclosures"), "السياسات والإفصاحات");
assert.equal(translateUiText("Terms of service"), "شروط الخدمة");
assert.equal(translateUiText("Authenticator App"), "تطبيق المصادقة");
assert.equal(translateUiText("added"), "مضاف");
assert.equal(translateUiText("privacy"), "الخصوصية");
assert.equal(translateUiText("Friend"), "صديق");
assert.equal(translateUiText("Friends"), "الأصدقاء");
assert.equal(translateUiText("You"), "أنت");
assert.equal(translateUiText("Get Nitro"), "الحصول على Nitro");
assert.equal(translateUiText("Family Center"), "مركز العائلة");
assert.equal(translateUiText("Devices"), "الأجهزة");
assert.equal(translateUiText("Clips"), "المقاطع");
assert.equal(translateUiText("Mention"), "إشارة");
assert.equal(translateUiText("Apps"), "التطبيقات");
assert.equal(translateUiText("Scan QR Code"), "مسح رمز QR");
assert.equal(translateUiText("0 friends"), "0 أصدقاء");
assert.equal(translateUiText("Allow my voice to be recorded in Clips"), "السماح بتسجيل صوتي في المقاطع");
assert.equal(translateUiText("Sending status"), "Sending status");
assert.equal(translateUiText("Use data to personalize my Discord experience"), "استخدام البيانات لتخصيص تجربتي في ديسكورد");

console.log("ArabCord translation tests passed.");
