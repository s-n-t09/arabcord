export type TranslationValue = string | number | boolean | null | undefined;

/**
 * Arabic UI strings used as a safe, local fallback. The Discord client keeps
 * user-generated message content outside this path; ArabCord only applies
 * this table to strings returned by Discord's intl module.
 */
export const TRANSLATIONS: Record<string, string> = {
  "You": "أنت",
  "Get Nitro": "الحصول على Nitro",
  "Discord": "ديسكورد",
  "General": "عام",
  "Add friends": "إضافة أصدقاء",
  "Add Friends": "إضافة أصدقاء",
  "Invite members": "دعوة أعضاء",
  "Text channel": "قناة نصية",
  "Category": "الفئة",
  "About Me": "نبذة عني",
  "Member Since": "عضو منذ",
  "Note (only visible to you)": "ملاحظة (تظهر لك فقط)",
  "Media": "الوسائط",
  "Pins": "التثبيتات",
  "Files": "الملفات",
  "Poll": "استطلاع",
  "Copy text": "نسخ النص",
  "Channels & Roles": "القنوات والأدوار",
  "Community Server": "خادم مجتمعي",
  "Edit Per-server Profile": "تعديل الملف الشخصي لكل خادم",
  "Show all channels": "إظهار جميع القنوات",
  "Hide muted channels": "إخفاء القنوات المكتومة",
  "Report Server": "الإبلاغ عن الخادم",
  "Copy Server ID": "نسخ معرّف الخادم",
  "Allow message requests": "السماح بطلبات الرسائل",
  "Allow direct messages": "السماح بالرسائل المباشرة",
  "Browse Channels": "تصفح القنوات",
  "Voice Call": "مكالمة صوتية",
  "Video Call": "مكالمة فيديو",
  "Copy Username": "نسخ اسم المستخدم",
  "Invite to server": "دعوة إلى الخادم",
  "View main profile": "عرض الملف الشخصي الرئيسي",
  "Add by username": "الإضافة باستخدام اسم المستخدم",
  "Mention": "إشارة",
  "QR Code": "رمز QR",
  "Share Invite": "مشاركة الدعوة",
  "Suggested Friends": "الأصدقاء المقترحون",
  "Orbs balance": "رصيد Orbs",
  "Acknowledgement": "الإقرار",
  "Upload debug logs to Discord Support": "رفع سجلات التصحيح إلى دعم ديسكورد",
  "LaunchPad": "لوحة التشغيل",
  "Launch Pad": "لوحة التشغيل",
  "Full Screen Gesture": "إيماءة ملء الشاشة",
  "Right Edge Gesture": "إيماءة الحافة اليمنى",
  "Pull Tab": "علامة السحب",
  "Play Shortcut": "اختصار التشغيل",
  "Hide Play Shortcut in DMs List": "إخفاء اختصار التشغيل في قائمة الرسائل الخاصة",
  "Use a global right to left gesture to activate Launch Pad (Please Note: this will disable the swipe-to-reply function in chat and require a right edge gesture to drag chats back in due to gesture conflicts).": "استخدم إيماءة عامة من اليمين إلى اليسار لتفعيل لوحة التشغيل (يرجى ملاحظة أن هذا سيعطّل وظيفة السحب للرد في الدردشة، وسيتطلب إيماءة من الحافة اليمنى لإعادة سحب الدردشات بسبب تعارض الإيماءات).",
  "Use a global right to left gesture to activate Launch Pad that you activate from the right edge (on Android this may conflict with system gestures if you have them enabled and while this keeps swipe to reply enabled, there may be conflicts we still need to fix).": "استخدم إيماءة عامة من اليمين إلى اليسار لتفعيل لوحة التشغيل من الحافة اليمنى (قد يتعارض هذا في Android مع إيماءات النظام إذا كانت مفعّلة، ورغم إبقاء السحب للرد مفعّلًا فقد تحدث تعارضات ما زلنا بحاجة إلى إصلاحها).",
  "Use a persistent pull tab element on the right of the screen to activate Launch Pad.": "استخدم عنصر سحب ثابتًا على يمين الشاشة لتفعيل لوحة التشغيل.",
  "Enables an experimental feature for faster navigation throughout the app. Accessible globally with a gesture or pull-tab UI element.": "يفعّل ميزة تجريبية لتسريع التنقّل في التطبيق. ويمكن الوصول إليها من أي مكان باستخدام إيماءة أو عنصر واجهة علامة السحب.",
  "Search": "بحث",
  "Search...": "بحث...",
  "Search…": "بحث…",
  "No results found": "لم يتم العثور على نتائج",
  "Home": "الرئيسية",
  "Friends": "الأصدقاء",
  "Add Friend": "إضافة صديق",
  "Remove Authenticator App": "إزالة تطبيق المصادقة",
  "Remove": "إزالة",
  "Message": "رسالة",
  "Messages": "الرسائل",
  "Direct Messages": "الرسائل الخاصة",
  "Message Requests": "طلبات الرسائل",
  "All": "الكل",
  "Online": "متصل",
  "Offline": "غير متصل",
  "Idle": "خامل",
  "Do Not Disturb": "عدم الإزعاج",
  "Invisible": "مخفي",
  "Servers": "الخوادم",
  "Server": "خادم",
  "Discover": "استكشاف",
  "Explore Discoverable Servers": "استكشاف الخوادم القابلة للاكتشاف",
  "Nitro": "Nitro",
  "Shop": "المتجر",
  "Library": "المكتبة",
  "Inbox": "الوارد",
  "Mentions": "الإشارات",
  "Unread": "غير مقروءة",
  "Mark as Read": "تحديد كمقروء",
  "Mark Unread": "تحديد كغير مقروء",
  "Notifications": "الإشعارات",
  "Threads": "المواضيع",
  "Thread": "موضوع",
  "Create Thread": "إنشاء موضوع",
  "Start a Conversation": "ابدأ محادثة",
  "Welcome to the beginning of this server.": "مرحبًا بك في بداية هذا الخادم.",
  "Welcome to the beginning of this channel.": "مرحبًا بك في بداية هذه القناة.",
  "You do not have permission to do that.": "ليس لديك صلاحية لتنفيذ ذلك.",
  "You haven't added any friends yet.": "لم تضف أي أصدقاء بعد.",
  "No friends found": "لم يتم العثور على أصدقاء",
  "No messages": "لا توجد رسائل",
  "No messages found": "لم يتم العثور على رسائل",
  "No channels found": "لم يتم العثور على قنوات",
  "No servers found": "لم يتم العثور على خوادم",
  "Settings": "الإعدادات",
  "User Settings": "إعدادات المستخدم",
  "My Account": "حسابي",
  "Profiles": "الملفات الشخصية",
  "Profile": "الملف الشخصي",
  "Privacy & Safety": "الخصوصية والأمان",
  "Authorized Apps": "التطبيقات المصرّح لها",
  "Connections": "الاتصالات",
  "Language": "اللغة",
  "Appearance": "المظهر",
  "Accessibility": "إمكانية الوصول",
  "Voice & Video": "الصوت والفيديو",
  "Keybinds": "اختصارات لوحة المفاتيح",
  "Advanced": "متقدم",
  "Developer Mode": "وضع المطوّر",
  "Developer Mode exposes context menu items helpful for people writing apps using the Discord API.": "يوفّر وضع المطوّر عناصر في قائمة السياق مفيدة للأشخاص الذين يكتبون تطبيقات باستخدام Discord API.",
  "Add status": "إضافة حالة",
  "Add Status": "إضافة حالة",
  "Please Note": "يرجى ملاحظة",
  "Advanced Settings": "الإعدادات المتقدمة",
  "Streamer Mode": "وضع البث",
  "Log Out": "تسجيل الخروج",
  "Save Changes": "حفظ التغييرات",
  "Changes saved": "تم حفظ التغييرات",
  "Cancel": "إلغاء",
  "Done": "تم",
  "Close": "إغلاق",
  "Back": "رجوع",
  "Next": "التالي",
  "Continue": "متابعة",
  "Confirm": "تأكيد",
  "Dismiss": "تجاهل",
  "Apply": "تطبيق",
  "Reset": "إعادة ضبط",
  "Enable": "تفعيل",
  "Disable": "تعطيل",
  "Enabled": "مفعّل",
  "Disabled": "معطّل",
  "Edit": "تعديل",
  "Delete": "حذف",
  "Copy": "نسخ",
  "Copied": "تم النسخ",
  "Paste": "لصق",
  "Reply": "رد",
  "Replying to": "الرد على",
  "Forward": "إعادة توجيه",
  "Pin": "تثبيت",
  "Unpin": "إلغاء التثبيت",
  "Pinned Messages": "الرسائل المثبّتة",
  "Mark as Unread": "تحديد كغير مقروء",
  "Unmute": "إلغاء الكتم",
  "Mute Channel": "كتم القناة",
  "Notification Settings": "إعدادات الإشعارات",
  "Report": "إبلاغ",
  "Block": "حظر",
  "Unblock": "إلغاء الحظر",
  "Ignore": "تجاهل",
  "Unignore": "إلغاء التجاهل",
  "Invite": "دعوة",
  "Create Invite": "إنشاء دعوة",
  "Copy Invite Link": "نسخ رابط الدعوة",
  "Join Server": "الانضمام إلى الخادم",
  "Leave Server": "مغادرة الخادم",
  "Create Server": "إنشاء خادم",
  "Create Channel": "إنشاء قناة",
  "Edit Channel": "تعديل القناة",
  "Delete Channel": "حذف القناة",
  "Channel Settings": "إعدادات القناة",
  "Server Settings": "إعدادات الخادم",
  "Server Profile": "ملف الخادم",
  "Manage Members": "إدارة الأعضاء",
  "Roles": "الأدوار",
  "Members": "الأعضاء",
  "Member": "عضو",
  "Bans": "المحظورون",
  "Invites": "الدعوات",
  "Audit Log": "سجل التدقيق",
  "Integrations": "عمليات التكامل",
  "Overview": "نظرة عامة",
  "Welcome Screen": "شاشة الترحيب",
  "Onboarding": "التهيئة",
  "Community": "المجتمع",
  "Safety Setup": "إعدادات الأمان",
  "Rules Screening": "مراجعة القواعد",
  "Roles & Permissions": "الأدوار والصلاحيات",
  "Text Channels": "القنوات النصية",
  "Voice Channels": "القنوات الصوتية",
  "Stage Channels": "قنوات المسرح",
  "Announcement Channels": "قنوات الإعلانات",
  "Voice Connected": "متصل صوتيًا",
  "Connecting": "جارٍ الاتصال",
  "Disconnected": "غير متصل",
  "Disconnect": "قطع الاتصال",
  "Connect": "اتصال",
  "Mute": "كتم الصوت",
  "Deafen": "كتم السماعة",
  "Undeafen": "إلغاء كتم السماعة",
  "Video": "الفيديو",
  "Screen": "الشاشة",
  "Share Your Screen": "مشاركة شاشتك",
  "Turn On Camera": "تشغيل الكاميرا",
  "Turn Off Camera": "إيقاف الكاميرا",
  "User Volume": "مستوى صوت المستخدم",
  "No route": "لا يوجد مسار اتصال",
  "Voice Activity": "النشاط الصوتي",
  "Push to Talk": "اضغط للتحدث",
  "Input Device": "جهاز الإدخال",
  "Output Device": "جهاز الإخراج",
  "Input Volume": "مستوى صوت الإدخال",
  "Output Volume": "مستوى صوت الإخراج",
  "Test Mic": "اختبار الميكروفون",
  "Activity": "النشاط",
  "Playing": "يلعب",
  "Listening to": "يستمع إلى",
  "Watching": "يشاهد",
  "Streaming": "يبث",
  "Custom Status": "حالة مخصّصة",
  "Set a Custom Status": "تعيين حالة مخصّصة",
  "Clear Status": "مسح الحالة",
  "What's on your mind?": "بماذا تفكر؟",
  "Add a note": "إضافة ملاحظة",
  "Send": "إرسال",
  "Send Message": "إرسال رسالة",
  "Edit Message": "تعديل الرسالة",
  "Delete Message": "حذف الرسالة",
  "Copy Message Link": "نسخ رابط الرسالة",
  "Copy Message ID": "نسخ معرّف الرسالة",
  "Copy User ID": "نسخ معرّف المستخدم",
  "Add Reaction": "إضافة تفاعل",
  "Remove Reaction": "إزالة التفاعل",
  "More": "المزيد",
  "Show All": "إظهار الكل",
  "Show Less": "إظهار أقل",
  "Load More": "تحميل المزيد",
  "See All": "عرض الكل",
  "Today": "اليوم",
  "Yesterday": "أمس",
  "Tomorrow": "غدًا",
  "Never": "أبدًا",
  "Just now": "الآن",
  "A few seconds ago": "منذ بضع ثوانٍ",
  "Unknown": "غير معروف",
  "Something went wrong": "حدث خطأ ما",
  "Try again": "حاول مجددًا",
  "Retry": "إعادة المحاولة",
  "Loading": "جارٍ التحميل",
  "Please wait": "يرجى الانتظار",
  "Error": "خطأ",
  "Success": "نجاح",
  "Are you sure?": "هل أنت متأكد؟",
  "This action cannot be undone.": "لا يمكن التراجع عن هذا الإجراء.",
  "You have unsaved changes.": "لديك تغييرات غير محفوظة.",
  "New Messages": "رسائل جديدة",
  "New Message": "رسالة جديدة",
  "New": "جديد",
  "Learn More": "معرفة المزيد",
  "What's New": "ما الجديد",
  "Help": "المساعدة",
  "Feedback": "ملاحظات",
  "Support": "الدعم",
  "Invite People": "دعوة أشخاص",
  "Search for a server": "البحث عن خادم",
  "Search for a channel": "البحث عن قناة",
  "Search messages": "البحث في الرسائل",
  "Search members": "البحث عن أعضاء",
  "Search results": "نتائج البحث",
  "Results": "النتائج",
  "Sort by": "ترتيب حسب",
  "Newest": "الأحدث",
  "Oldest": "الأقدم",
  "Relevance": "الصلة",
  "All Time": "كل الوقت",
  "Last 7 Days": "آخر 7 أيام",
  "Last 30 Days": "آخر 30 يومًا",
  "Last 3 Months": "آخر 3 أشهر",
  "Last 6 Months": "آخر 6 أشهر",
  "Never Mind": "لا يهم",
  "Accept": "قبول",
  "Decline": "رفض",
  "Allow": "السماح",
  "Deny": "رفض",
  "Open": "فتح",
  "Open in Browser": "فتح في المتصفح",
  "Download": "تنزيل",
  "Upload": "رفع",
  "Choose File": "اختيار ملف",
  "Clear": "مسح",
  "Select": "تحديد",
  "Select All": "تحديد الكل",
  "Deselect All": "إلغاء تحديد الكل",
  "View": "عرض",
  "Preview": "معاينة",
  "Edit Profile": "تعديل الملف الشخصي",
  "Change Avatar": "تغيير الصورة الشخصية",
  "Change Banner": "تغيير الغلاف",
  "Username": "اسم المستخدم",
  "Display Name": "اسم العرض",
  "Email": "البريد الإلكتروني",
  "Phone": "الهاتف",
  "Password": "كلمة المرور",
  "Two-Factor Authentication": "المصادقة الثنائية",
  "Enable Two-Factor Auth": "تفعيل المصادقة الثنائية",
  "Verification": "التحقق",
  "Verify": "تحقق",
  "Account": "الحساب",
  "Billing": "الفوترة",
  "Subscriptions": "الاشتراكات",
  "Gift Inventory": "مخزون الهدايا",
  "Privacy": "الخصوصية",
  "Safety": "الأمان",
  "Data & Privacy": "البيانات والخصوصية",
  "Text": "النص",
  "Interface": "الواجهة",
  "Motion": "الحركة",
  "Reduced Motion": "تقليل الحركة",
  "Animations": "الرسوم المتحركة",
  "Show Spoilers": "إظهار الحرق",
  "Compact Mode": "الوضع المضغوط",
  "Show Timestamps": "إظهار الطوابع الزمنية",
  "Show Message Grouping": "إظهار تجميع الرسائل",
  "Developer Settings": "إعدادات المطوّر",
  "Plugins": "الإضافات",
  "Updates": "التحديثات",
  "Check for Updates": "التحقق من التحديثات",
  "About": "حول",
  "Version": "الإصدار",
  "Forget about your password": "انتهى القلق بشأن كلمة المرور",
  "Add a passkey and login with a single tap.": "أضف مفتاح مرور وسجّل الدخول بلمسة واحدة.",
  "Get started": "البدء",
  "How you sign into your account": "كيفية تسجيل الدخول إلى حسابك",
  "Security Keys": "مفاتيح الأمان",
  "added": "مضاف",
  "Authenticator App": "تطبيق المصادقة",
  "privacy": "الخصوصية",
  "We need to store and process some data in order to provide you the basic Discord service, such as your messages, what servers you’re in and more. By using Discord, you allow us to provide you this basic service. You can stop this by Disabling or Deleting your account.": "نحتاج إلى تخزين بعض البيانات ومعالجتها حتى نتمكن من توفير خدمة Discord الأساسية لك، مثل رسائلك والخوادم التي تنضم إليها وغير ذلك. باستخدام Discord، تسمح لنا بتوفير هذه الخدمة الأساسية لك. يمكنك إيقاف ذلك بتعطيل حسابك أو حذفه.",
  "SMS Authentication": "المصادقة عبر SMS",
  "Security": "الأمان",
  "Standing": "الحالة",
  "Your account is limited": "حسابك مقيّد",
  "You may lose access to some parts of Discord if you break the rules again.": "قد تفقد الوصول إلى بعض أجزاء Discord إذا خالفت القواعد مرة أخرى.",
  "All good!": "كل شيء على ما يرام!",
  "Limited": "مقيّد",
  "Very limited": "مقيّد جدًا",
  "At": "في",
  "Suspended": "معلّق",
  "Active violations": "المخالفات النشطة",
  "These affect your account status until they expire.": "تؤثر هذه المخالفات في حالة حسابك حتى تنتهي.",
  "Expired violations": "المخالفات المنتهية",
  "These no longer affect your account status.": "لم تعد هذه المخالفات تؤثر في حالة حسابك.",
  "Content & Social": "المحتوى والتواصل الاجتماعي",
  "Connected Games": "الألعاب المتصلة",
  "Sensitive content filters": "فلاتر المحتوى الحساس",
  "Choose how you want to see image-based media detected by Discord’s sensitive content filters.": "اختر طريقة عرض الوسائط المعتمدة على الصور التي تكتشفها فلاتر المحتوى الحساس في Discord.",
  "Filter all": "تصفية الكل",
  "DMs will be filtered for spam": "ستتم تصفية الرسائل الخاصة بحثًا عن الرسائل المزعجة",
  "Filter from non-friends": "تصفية الرسائل من غير الأصدقاء",
  "DMs from non-friends will be filtered for spam": "ستتم تصفية الرسائل الخاصة من غير الأصدقاء بحثًا عن الرسائل المزعجة",
  "Do not filter": "عدم التصفية",
  "DMs will not be filtered for spam": "لن تتم تصفية الرسائل الخاصة بحثًا عن الرسائل المزعجة",
  "Automatically send DMs that may contain spam into a separate spam inbox.": "إرسال الرسائل الخاصة التي قد تحتوي على رسائل مزعجة تلقائيًا إلى صندوق وارد منفصل للرسائل المزعجة.",
  "Age-restricted commands": "الأوامر المقيّدة عمريًا",
  "age-restricted commands": "الأوامر المقيّدة عمريًا",
  "From apps in direct messages": "من التطبيقات في الرسائل الخاصة",
  "This setting applies to all apps.": "ينطبق هذا الإعداد على جميع التطبيقات.",
  "commands marked as age-restricted in DMs": "الأوامر المعلّمة كمقيّدة عمريًا في الرسائل الخاصة",
  "defaults": "الافتراضيات",
  "Server Boost": "تعزيز الخادم",
  "Boost Server": "تعزيز الخادم",
  "Boost": "تعزيز",
  "Quests": "المهام",
  "Nitro Gifting": "هدايا Nitro",
  "App Settings": "إعدادات التطبيقات",
  "Voice": "الصوت",
  "Theme": "المظهر",
  "Sepia": "بني داكن",
  "Chat": "الدردشة",
  "Web Browser": "متصفح الويب",
  "App Icon": "أيقونة التطبيق",
  "English, US": "الإنجليزية، الولايات المتحدة",
  "Enable RTL": "تفعيل RTL",
  "Family Center": "مركز العائلة",
  "Devices": "الأجهزة",
  "Clips": "المقاطع",
  "Apps": "التطبيقات",
  "Scan QR Code": "مسح رمز QR",
  "Allow my voice to be recorded in Clips": "السماح بتسجيل صوتي في المقاطع",
  "By turning on this setting. Your voice may be included when someone in the same voice channel uses Clips.": "عند تفعيل هذا الإعداد، قد يُضمَّن صوتك عندما يستخدم شخص في القناة الصوتية نفسها ميزة المقاطع.",
  "Sending": "جارٍ الإرسال",
  "Sending...": "جارٍ الإرسال...",
  "Sending…": "جارٍ الإرسال…",
  "Friend": "صديق",
  "Use data to improve Discord": "استخدام البيانات لتحسين ديسكورد",
  "Allows us to use and process your information to understand and improve our services. Learn more": "السماح لنا باستخدام معلوماتك ومعالجتها لفهم خدماتنا وتحسينها. معرفة المزيد",
  "Use data to personalize my Discord experience": "استخدام البيانات لتخصيص تجربتي في ديسكورد",
  "Allows us to use information, such as who you talk to and what games you play, to personalize Discord for you. Learn more": "السماح لنا باستخدام معلومات مثل الأشخاص الذين تتحدث إليهم والألعاب التي تلعبها لتخصيص ديسكورد لك. معرفة المزيد",
  "Use my Discord activity to personalize Sponsored Content": "استخدام نشاطي على ديسكورد لتخصيص المحتوى المدعوم",
  "Use third-party data to personalize Sponsored Content": "استخدام بيانات الجهات الخارجية لتخصيص المحتوى المدعوم",
  "Request all of my data": "طلب جميع بياناتي",
  "Learn more about how getting a copy of your personal data works": "معرفة المزيد حول طريقة الحصول على نسخة من بياناتك الشخصية",
  "Privacy policy": "سياسة الخصوصية",
  "privacy policy": "سياسة الخصوصية",
  "Persistent verification codes": "رموز التحقق الدائمة",
  "persistent verification codes": "رموز التحقق الدائمة",
  "Allow users to save their devices and mark them as verified": "السماح للمستخدمين بحفظ أجهزتهم ووضع علامة التحقق عليها",
  "All of your calls on Discord are end-to-end encrypted no matter what. That means nobody — not even Wumpus — can listen in on your conversations. These settings let you control optional details when verifying our encryption protocol. Learn more": "جميع مكالماتك على ديسكورد مشفّرة من طرف إلى طرف مهما كان الأمر. هذا يعني أنه لا يمكن لأي شخص، حتى Wumpus، الاستماع إلى محادثاتك. تتيح لك هذه الإعدادات التحكم في التفاصيل الاختيارية عند التحقق من بروتوكول التشفير لدينا. معرفة المزيد",
  "Policies & disclosures": "السياسات والإفصاحات",
  "Terms of service": "شروط الخدمة",
  "Here are all the devices that are currently logged in with your Discord account. You can log out of each one individually or all other devices.": "هذه جميع الأجهزة المسجّل الدخول إليها حاليًا باستخدام حساب ديسكورد الخاص بك. يمكنك تسجيل الخروج من كل جهاز على حدة أو من جميع الأجهزة الأخرى.",
  "If you see an entry you don’t recognize, log out of that device and change your Discord account password immediately.": "إذا رأيت جهازًا لا تتعرّف إليه، فسجّل الخروج منه وغيّر كلمة مرور حساب ديسكورد فورًا.",
  "Current Device": "الجهاز الحالي",
  "Other Devices": "الأجهزة الأخرى",
  "Some older devices may not be shown here": "قد لا تظهر بعض الأجهزة الأقدم هنا",
  "To log them out, please change your password": "لتسجيل الخروج منها، يُرجى تغيير كلمة المرور",
  "Known Devices": "الأجهزة المعروفة",
  "Log out of all": "تسجيل الخروج من الجميع",
  "You’ll have to log back in on all logged out devices.": "سيتعين عليك تسجيل الدخول مجددًا إلى جميع الأجهزة التي تم تسجيل الخروج منها.",
  "Info": "معلومات",
  "Links": "الروابط",
  "Discord Server": "خادم ديسكورد",
  "Actions": "الإجراءات",
  "Reload Discord": "إعادة تحميل ديسكورد",
  "Safe Mode": "الوضع الآمن",
  "Load Kettu without loading add-ons": "تحميل Kettu دون تحميل الإضافات",
  "Miscellaneous": "متفرقات",
  "Activate Discord Experiments": "تفعيل تجارب ديسكورد",
  "Warning: Messing with this feature may lead to account termination. I heavily discourage using this and am not responsible for anything that happens if you use it": "تحذير: قد يؤدي العبث بهذه الميزة إلى إنهاء الحساب. لا أنصح بشدة باستخدامها، ولست مسؤولًا عن أي شيء يحدث إذا استخدمتها.",
};

const protectedPattern = /https?:\/\/[^\s]+|```[\s\S]*?```|`[^`]*`|<[@#][!&]?\d+>|\{[^{}]*\}/g;
const lowerTranslations = new Map(
  Object.entries(TRANSLATIONS).map(([source, target]) => [source.toLocaleLowerCase("en-US"), target]),
);
const knownUiSources = Object.keys(TRANSLATIONS)
  .filter(source => source.length >= 12 && /\s/.test(source))
  .sort((a, b) => b.length - a.length);

function normalizeUiText(value: string): string {
  return value.normalize("NFKC").replace(/[\u00a0\u200b]/g, " ").replace(/\s+/g, " ").trim();
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function translateProtectedSegment(segment: string): string {
  const leading = segment.match(/^\s*/)?.[0] ?? "";
  const trailing = segment.match(/\s*$/)?.[0] ?? "";
  const core = segment.slice(leading.length, segment.length - trailing.length || undefined);
  const exact = TRANSLATIONS[core];
  if (exact) return `${leading}${exact}${trailing}`;
  const lower = lowerTranslations.get(core.toLocaleLowerCase("en-US"));
  if (lower) return `${leading}${lower}${trailing}`;
  return translateCountPatterns(segment);
}

function translateCountPatterns(text: string): string {
  return text
    .replace(/\bActive\s+violations\s+—\s+(\d+)\b/gi, (_, count: string) => `المخالفات النشطة — ${count}`)
    .replace(/\bExpired\s+violations\s+—\s+(\d+)\b/gi, (_, count: string) => `المخالفات المنتهية — ${count}`)
    .replace(/\b(\d+)\s+messages?\b/gi, (_, count: string) => `${count} ${count === "1" ? "رسالة" : "رسائل"}`)
    .replace(/\b(\d+)\s+members?\b/gi, (_, count: string) => `${count} ${count === "1" ? "عضو" : "أعضاء"}`)
    .replace(/\b(\d+)\s+friends?\b/gi, (_, count: string) => `${count} ${count === "1" ? "صديق" : "أصدقاء"}`)
    .replace(/\b(\d+)\s+added\b/gi, (_, count: string) => `${count} مضافة`)
    .replace(/\b(\d+)\s+active\b/gi, (_, count: string) => `${count} نشطة`)
    .replace(/\b(\d+)\s+expired\b/gi, (_, count: string) => `${count} منتهية`)
    .replace(/\b(\d+)\s+violations?\b/gi, (_, count: string) => `${count} مخالفة`)
    .replace(/\b(\d+)\s+apps?\b/gi, (_, count: string) => `${count} تطبيق`)
    .replace(/\b(\d+)\s+boosts?\b/gi, (_, count: string) => `${count} ${count === "1" ? "تعزيز" : "تعزيزات"}`)
    .replace(/\b(\d+)\s+online\b/gi, (_, count: string) => `${count} متصل`)
    .replace(/(\{[^{}]+\})\s+messages?\b/gi, (_, placeholder: string) => `${placeholder} رسائل`)
    .replace(/(\{[^{}]+\})\s+members?\b/gi, (_, placeholder: string) => `${placeholder} أعضاء`)
    .replace(/(\{[^{}]+\})\s+friends?\b/gi, (_, placeholder: string) => `${placeholder} أصدقاء`);
}

export function translateUiText(value: TranslationValue): TranslationValue {
  if (typeof value !== "string" || value.length === 0) return value;
  const exact = TRANSLATIONS[value];
  if (exact) return exact;
  const lower = lowerTranslations.get(value.toLocaleLowerCase("en-US"));
  if (lower) return lower;

  let cursor = 0;
  let result = "";
  for (const match of value.matchAll(protectedPattern)) {
    const index = match.index ?? 0;
    result += translateProtectedSegment(value.slice(cursor, index));
    result += match[0];
    cursor = index + match[0].length;
  }
  result += translateProtectedSegment(value.slice(cursor));
  return translateCountPatterns(result);
}

export function translateKnownUiText(value: TranslationValue): TranslationValue {
  if (typeof value !== "string" || value.length === 0) return value;
  const normalized = normalizeUiText(value);
  const normalizedLower = normalized.toLocaleLowerCase("en-US");
  const isKnown =
    Object.prototype.hasOwnProperty.call(TRANSLATIONS, value) ||
    Object.prototype.hasOwnProperty.call(TRANSLATIONS, normalized) ||
    lowerTranslations.has(normalizedLower) ||
    /^\d+\s+(?:messages?|members?|friends?|added|active|expired|violations?|apps?|boosts?|online)$/i.test(normalized);
  return isKnown ? translateUiText(normalized) : value;
}

export function translateUiPropText(value: TranslationValue): TranslationValue {
  if (typeof value !== "string" || value.length === 0) return value;
  const exact = translateKnownUiText(value);
  if (exact !== value) return exact;
  let result = value;
  for (const source of knownUiSources) {
    if (!result.toLocaleLowerCase("en-US").includes(source.toLocaleLowerCase("en-US"))) continue;
    result = result.replace(new RegExp(escapeRegExp(source), "gi"), TRANSLATIONS[source]);
  }
  return result;
}

export function translateRecord<T extends Record<string, unknown>>(record: T): T {
  return new Proxy(record, {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);
      return typeof value === "string" ? translateUiText(value) : value;
    },
  });
}
