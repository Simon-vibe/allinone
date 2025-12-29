const translations = {
    en: {
        "nav.home": "Home",
        "nav.categories": "Categories",
        "nav.about": "About",
        "nav.login": "Login",
        "hero.title": "All the tools you need, in one place.",
        "hero.subtitle": "A categorized collection of developer utilities, converters, and productivity tools.",
        "search.placeholder": "Search for a tool (e.g., JSON Formatter)...",
        "search.btn": "Search",
        "featured.title": "Featured Tools",
        "featured.viewAll": "View all",
        "tool.launch": "Launch Tool",
        "cat.dev": "Developer Tools",
        "cat.media": "Content & Media",
        "tool.json.title": "JSON Formatter",
        "tool.json.desc": "Beautify and validate JSON data instantly.",
        "tool.base64.title": "Base64 Encoder",
        "tool.base64.desc": "Encode and decode data strings easily. Essential for developers.",
        "tool.timestamp.title": "Unix Timestamp",
        "tool.timestamp.desc": "Convert between dates and Unix timestamps.",
        "tool.imgcomp.title": "Image Resizer",
        "tool.imgcomp.desc": "Resize images instantly without quality loss. Supports PNG, JPG, and WebP.",
        "tool.md.title": "Markdown Editor",
        "tool.md.desc": "WYSIWYG Markdown editor with real-time preview.",
        "tool.pdf.title": "Bank Statement Converter",
        "tool.pdf.desc": "Convert PDF bank statements to Excel securely in your browser. No data upload.",
        "tool.more.title": "More tools coming soon...",
        "tool.more.desc": "Stay tuned.",
        "footer.rights": "© 2026 allinone.page. All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.contact": "Contact",
        "tool.popular": "POPULAR",
        "about.hero.title": "Simplifying Your Workflow",
        "about.hero.desc": "We provide a suite of powerful, free-to-use tools designed to make your daily digital tasks easier, faster, and more secure.",
        "about.values.title": "Our Core Values",
        "about.values.subtitle": "Built with the user in mind, we focus on what matters most: speed, privacy, and accessibility.",
        "about.val.free.title": "Free to Use",
        "about.val.free.desc": "Access all tools without hidden fees, credit cards, or premium subscriptions.",
        "about.val.privacy.title": "Privacy Focused",
        "about.val.privacy.desc": "Your data is processed securely. Files are automatically deleted after processing.",
        "about.val.fast.title": "Fast Processing",
        "about.val.fast.desc": "Optimized algorithms ensure your tasks are completed in seconds.",
        "about.team.title": "Meet the Team",
        "about.contact.title": "Get in Touch",
        "about.contact.desc": "Have a question or spotted a bug? Send us a message.",
        "about.form.name": "Name",
        "about.form.email": "Email",
        "about.form.subject": "Subject",
        "about.form.message": "Message",
        "about.form.send": "Send Message",

        // PDF Converter
        "pdf.drag.title": "Drop PDF Statement Here",
        "pdf.drag.subtitle": "or click to select file",
        "pdf.status.processing": "Processing PDF...",
        "pdf.status.ready": "Ready to Download",
        "pdf.status.error": "Error processing file",
        "pdf.preview.title": "Preview Extracted Data",
        "pdf.action.download_excel": "Download Excel (.xlsx)",
        "pdf.action.download_csv": "Download CSV",
        "pdf.note.privacy": "🔒 Processed locally. Your data never leaves this browser.",
        "pdf.password.title": "Password Required",
        "pdf.password.desc": "This PDF is encrypted. Please enter the password to proceed.",
        "pdf.password.placeholder": "Enter password",
        "pdf.password.incorrect": "Incorrect password. Please try again.",
        "common.cancel": "Cancel",
        "common.submit": "Submit",

        // FAQ - PDF Converter
        "pdf.faq.title": "How to Convert PDF Bank Statements to Excel?",
        "pdf.faq.desc": "Our <strong>PDF to Excel Converter</strong> is designed for privacy and speed. Unlike other tools that upload your sensitive financial documents to a server, this tool processes everything locally in your browser using WebAssembly technology.",
        "pdf.faq.feat.title": "Key Features:",
        "pdf.faq.feat.priv": "<strong>100% Private:</strong> Your files never leave your device.",
        "pdf.faq.feat.fast": "<strong>Fast:</strong> Instant conversion without queuing.",
        "pdf.faq.feat.free": "<strong>Free:</strong> No limits, no sign-up required.",
        "pdf.faq.feat.sec": "<strong>Secure:</strong> Handles password-protected PDFs locally.",
        "pdf.faq.q1.title": "Is my data safe?",
        "pdf.faq.q1.desc": "Yes, absolutely. All processing happens in your browser using JavaScript. No file is ever uploaded to any server.",
        "pdf.faq.q2.title": "Can I convert encrypted PDFs?",
        "pdf.faq.q2.desc": "Yes, if you have the password, you can decrypt and convert them directly in the browser.",

        // JSON Formatter
        "json.input.title": "Input JSON",
        "json.input.placeholder": "Paste your JSON here...",
        "json.action.format": "Format",
        "json.action.minify": "Minify",
        "json.action.clear": "Clear",
        "json.output.title": "Output (Pretty Print)",
        "json.action.copy": "Copy Output",

        // Image Compressor
        "img.drag.title": "Drag & Drop Image Here",
        "img.drag.subtitle": "or click to upload",
        "img.settings.title": "Compression Settings",
        "img.quality": "Quality",
        "img.width": "Max Width (px)",
        "img.height": "Max Height (px)",
        "img.format": "Format",
        "img.original": "Original",
        "img.compressed": "Compressed",
        "img.action.download": "Download",
        "img.action.compress": "Compress Image",

        // Base64
        "base64.input.label": "Input Text / Base64",
        "base64.input.placeholder": "Enter text to encode or Base64 string to decode...",
        "base64.action.encode": "Encode to Base64",
        "base64.action.decode": "Decode from Base64",
        "base64.output.label": "Result",
        "base64.output.placeholder": "Result will appear here...",

        // Markdown Editor
        "md.input.title": "Markdown Input",
        "md.input.placeholder": "Type your markdown here...",
        "md.preview.title": "Live Preview",
        "md.action.copy_html": "Copy HTML",
        "md.action.download": "Download .md",
        "md.word_count": "words",

        // Timestamp
        "ts.current.title": "Current Unix Timestamp",
        "ts.pause": "Pause Update",
        "ts.resume": "Resume Update",
        "ts.to_date.title": "Timestamp to Date",
        "ts.input_ts.label": "Unix Timestamp",
        "ts.unit.s": "Seconds",
        "ts.unit.ms": "Milliseconds",
        "ts.action.convert": "Convert",
        "ts.output.local": "Local Time",
        "ts.output.utc": "UTC Time",
        "ts.to_ts.title": "Date to Timestamp",
        "ts.input_date.label": "Select Date & Time",
        "ts.output.ts": "Timestamp (Seconds)",

        // FAQ - Image Compressor
        "img.faq.title": "Compress Images Online Without Uploading",
        "img.faq.desc": "Our <strong>Image Compressor</strong> provides a fast and secure way to optimize your photos and graphics. All compression happens directly on your device, ensuring your private photos are never sent to a cloud server.",
        "img.faq.feat.title": "Features:",
        "img.faq.feat.privacy": "<strong>Privacy First:</strong> Browser-based processing means 100% data security.",
        "img.faq.feat.format": "<strong>Format Support:</strong> Compatible with PNG, JPEG, and WebP.",
        "img.faq.feat.control": "<strong>Custom Controls:</strong> Adjust quality and max dimensions easily.",

        // FAQ - JSON Formatter
        "json.faq.title": "Best Online JSON Formatter",
        "json.faq.desc": "Debug and beautify your JSON configuration files and API responses with our free <strong>JSON Formatter</strong>. It helps developers read complex JSON trees by adding proper indentation and newlines.",
        "json.faq.feat.title": "Why use this tool?",
        "json.faq.feat.val": "<strong>Validation:</strong> Instantly check if your JSON syntax is correct.",
        "json.faq.feat.min": "<strong>Minification:</strong> Reduce file size for production usage.",
        "json.faq.feat.sec": "<strong>Secure:</strong> We do not store or send your data to any server.",

        // FAQ - Base64
        "base64.faq.title": "Fast Base64 Encoder/Decoder",
        "base64.faq.desc": "Easily translate text to Base64 strings or decode Base64 back to readable text with our <strong>Base64 Converter</strong>. Essential for developers working with data transmission.",
        "base64.faq.feat.title": "How it works:",
        "base64.faq.feat.enc": "<strong>Encode:</strong> Turns plain text (e.g., \"Hello\") into Base64 format (e.g., \"SGVsbG8=\").",
        "base64.faq.feat.dec": "<strong>Decode:</strong> Converts Base64 strings back to their original text.",
        "base64.faq.feat.safe": "<strong>Safe:</strong> No data leaves your browser.",

        // FAQ - Markdown
        "md.faq.title": "Real-time Markdown Editor",
        "md.faq.desc": "Write, edit, and preview Markdown content instantly with our <strong>Markdown Editor</strong>. It's perfect for writing documentation, README files, or blog posts.",
        "md.faq.feat.title": "Capabilities:",
        "md.faq.feat.live": "<strong>Live Preview:</strong> See changes as you type.",
        "md.faq.feat.html": "<strong>HTML Export:</strong> Copy the generated HTML code with one click.",
        "md.faq.feat.local": "<strong>Local Storage:</strong> Your text is saved in your browser, so you won't lose work on refresh.",

        // FAQ - Timestamp
        "ts.faq.title": "Unix Timestamp Converter",
        "ts.faq.desc": "Convert between Unix Epoch timestamps and human-readable dates instantly. Supports both seconds and milliseconds formats used in programming.",
        "ts.faq.sub.title": "What is Unix Time?",
        "ts.faq.sub.desc": "Unix time (also known as Epoch time) is the number of seconds that have elapsed since January 1, 1970 (UTC). It is widely used in computing to track time.",
        "ts.faq.feat.curr": "<strong>Current Time:</strong> Displays the live, ticking Unix timestamp.",
        "ts.faq.feat.conv": "<strong>Two-way Conversion:</strong> Convert Date -> Timestamp or Timestamp -> Date.",

        // Privacy & Terms
        "privacy.title": "Privacy Policy",
        "privacy.intro": "Your privacy is important to us. It is allinone.page's policy to respect your privacy regarding any information we may collect from you across our website.",
        "privacy.h1": "1. Information We Collect",
        "privacy.p1": "We do not collect any personal data. All tool processing (e.g., Image Compression, JSON formatting) happens entirely within your browser (Client-Side). No data is sent to our servers.",
        "privacy.h2": "2. Local Storage",
        "privacy.p2": "We use Local Storage to save your language preference (English/Chinese). This data stays on your device.",
        "privacy.h3": "3. Third Party Services",
        "privacy.p3": "We may use third-party CDN services (like Tailwind CSS, FontAwesome) to load resources. These services may collect standard access logs.",

        "terms.title": "Terms of Service",
        "terms.h1": "1. Terms",
        "terms.p1": "By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.",
        "terms.h2": "2. Use License",
        "terms.p2": "Permission is granted to temporarily download one copy of the materials (information or software) on Tool Directory's website for personal, non-commercial transitory viewing only.",
        "terms.h3": "3. Disclaimer",
        "terms.p3": "The materials on allinone.page's website are provided on an 'as is' basis. allinone.page makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    zh: {
        "nav.home": "首页",
        "nav.categories": "分类",
        "nav.about": "关于我们",
        "nav.login": "登录",
        "hero.title": "您需要的所有工具，尽在于此。",
        "hero.subtitle": "开发者实用程序、转换器和生产力工具的分类集合。",
        "search.placeholder": "搜索工具 (例如: JSON 格式化)...",
        "search.btn": "搜索",
        "featured.title": "精选工具",
        "featured.viewAll": "查看全部",
        "tool.launch": "打开工具",
        "cat.dev": "开发者工具",
        "cat.media": "内容与媒体",
        "tool.json.title": "JSON 格式化",
        "tool.json.desc": "即时美化和验证 JSON 数据。",
        "tool.base64.title": "Base64 编码",
        "tool.base64.desc": "轻松编码和解码数据字符串。开发者必备。",
        "tool.timestamp.title": "Unix 时间戳",
        "tool.timestamp.desc": "在日期和 Unix 时间戳之间转换。",
        "tool.imgcomp.title": "图片压缩",
        "tool.imgcomp.desc": "即时调整图片大小，无损画质。支持 PNG, JPG, WebP。",
        "tool.md.title": "Markdown 编辑器",
        "tool.md.desc": "所见即所得的 Markdown 编辑器，支持实时预览。",
        "tool.pdf.title": "银行对账单转换",
        "tool.pdf.desc": "安全地将 PDF 银行对账单转为 Excel。无需上传数据，浏览器本地处理。",
        "tool.more.title": "更多工具即将推出...",
        "tool.more.desc": "敬请期待。",
        "footer.rights": "© 2026 allinone.page. 保留所有权利。",
        "footer.privacy": "隐私政策",
        "footer.terms": "服务条款",
        "footer.contact": "联系我们",
        "tool.popular": "热门",
        "about.hero.title": "简化您的工作流程",
        "about.hero.desc": "我们提供一套强大且免费的工具，旨在让您的日常数字任务更轻松、更快速、更安全。",
        "about.values.title": "核心价值",
        "about.values.subtitle": "以用户为中心，我们关注最重要的：速度、隐私和可访问性。",
        "about.val.free.title": "完全免费",
        "about.val.free.desc": "使用所有工具无需隐藏费用，无需信用卡或高级订阅。",
        "about.val.privacy.title": "隐私至上",
        "about.val.privacy.desc": "您的数据安全处理。文件处理后自动删除。",
        "about.val.fast.title": "快速处理",
        "about.val.fast.desc": "优化算法确您的任务在几秒钟内完成。",
        "about.team.title": "遇见团队",
        "about.contact.title": "联系我们",
        "about.contact.desc": "有问题或发现Bug？给我们留言。",
        "about.form.name": "姓名",
        "about.form.email": "电子邮箱",
        "about.form.subject": "主题",
        "about.form.message": "留言内容",
        "about.form.send": "发送留言",

        "about.form.send": "发送留言",

        // PDF Converter
        "pdf.drag.title": "将 PDF 对账单拖放到此处",
        "pdf.drag.subtitle": "或点击选择文件",
        "pdf.status.processing": "正在处理 PDF...",
        "pdf.status.ready": "准备下载",
        "pdf.status.error": "处理文件出错",
        "pdf.preview.title": "预览提取的数据",
        "pdf.action.download_excel": "下载 Excel (.xlsx)",
        "pdf.action.download_csv": "下载 CSV",
        "pdf.note.privacy": "🔒 本地处理。您的数据从未离开此浏览器。",
        "pdf.password.title": "需要密码",
        "pdf.password.desc": "此 PDF 已加密。请输入密码以继续。",
        "pdf.password.placeholder": "请输入密码",
        "pdf.password.incorrect": "密码错误，请重试。",
        "common.cancel": "取消",
        "common.submit": "提交",

        // FAQ - PDF Converter
        "pdf.faq.title": "如何将 PDF 银行对账单转换为 Excel？",
        "pdf.faq.desc": "我们的<strong>PDF 转 Excel 转换器</strong>专为隐私和速度而设计。与其他将敏感财务文档上传到服务器的工具不同，此工具使用 WebAssembly 技术在您的浏览器中本地处理所有内容。",
        "pdf.faq.feat.title": "主要功能：",
        "pdf.faq.feat.priv": "<strong>100% 私密：</strong>您的文件通过从不离开您的设备。",
        "pdf.faq.feat.fast": "<strong>快速：</strong>无需排队的即时转换。",
        "pdf.faq.feat.free": "<strong>免费：</strong>无限制，无需注册。",
        "pdf.faq.feat.sec": "<strong>安全：</strong>在本地处理受密码保护的 PDF。",
        "pdf.faq.q1.title": "我的数据安全吗？",
        "pdf.faq.q1.desc": "是的，绝对安全。所有处理都使用 JavaScript 在您的浏览器中进行。没有文件会被上传到任何服务器。",
        "pdf.faq.q2.title": "我可以转换加密的 PDF 吗？",
        "pdf.faq.q2.desc": "是的，如果您有密码，可以直接在浏览器中解密并转换它们。",

        // JSON Formatter
        "json.input.title": "输入 JSON",
        "json.input.placeholder": "在这里粘贴您的 JSON...",
        "json.action.format": "格式化",
        "json.action.minify": "压缩",
        "json.action.clear": "清空",
        "json.output.title": "输出 (美化)",
        "json.action.copy": "复制结果",

        // Image Compressor
        "img.drag.title": "拖放图片到这里",
        "img.drag.subtitle": "或点击上传",
        "img.settings.title": "压缩设置",
        "img.quality": "质量",
        "img.width": "最大宽度 (px)",
        "img.height": "最大高度 (px)",
        "img.format": "格式",
        "img.original": "原始",
        "img.compressed": "压缩后",
        "img.action.download": "下载",
        "img.action.compress": "压缩图片",

        // Base64
        "base64.input.label": "输入文本 / Base64",
        "base64.input.placeholder": "输入要编码的文本或解码的 Base64 字符串...",
        "base64.action.encode": "编码为 Base64",
        "base64.action.decode": "Base64 解码",
        "base64.output.label": "结果",
        "base64.output.placeholder": "结果将显示在这里...",

        // Markdown Editor
        "md.input.title": "Markdown 输入",
        "md.input.placeholder": "在这里输入 Markdown...",
        "md.preview.title": "实时预览",
        "md.action.copy_html": "复制 HTML",
        "md.action.download": "下载 .md",
        "md.word_count": "字",

        // Timestamp
        "ts.current.title": "当前 Unix 时间戳",
        "ts.pause": "暂停更新",
        "ts.resume": "继续更新",
        "ts.to_date.title": "时间戳转日期",
        "ts.input_ts.label": "Unix 时间戳",
        "ts.unit.s": "秒",
        "ts.unit.ms": "毫秒",
        "ts.action.convert": "转换",
        "ts.output.local": "本地时间",
        "ts.output.utc": "UTC 时间",
        "ts.to_ts.title": "日期转时间戳",
        "ts.input_date.label": "选择日期和时间",
        "ts.output.ts": "时间戳 (秒)",

        // FAQ - Image Compressor
        "img.faq.title": "无需上传的在线图片压缩工具",
        "img.faq.desc": "我们的<strong>图片压缩器</strong>提供了一种快速安全的方式来优化您的照片和图形。所有压缩都在您的设备上直接进行，确保您的私人照片永远不会发送到云端服务器。",
        "img.faq.feat.title": "功能特点：",
        "img.faq.feat.privacy": "<strong>隐私至上：</strong>基于浏览器的处理意味着 100% 的数据安全。",
        "img.faq.feat.format": "<strong>多格式支持：</strong>兼容 PNG, JPEG 和 WebP。",
        "img.faq.feat.control": "<strong>自定义控制：</strong>轻松调整质量和最大尺寸。",

        // FAQ - JSON Formatter
        "json.faq.title": "优秀的在线 JSON 格式化工具",
        "json.faq.desc": "使用我们免费的<strong>JSON 格式化工具</strong>调试和美化您的 JSON 配置文件及 API 响应。通过添加适当的缩进和换行，帮助开发者阅读复杂的 JSON 树。",
        "json.faq.feat.title": "为什么使用此工具？",
        "json.faq.feat.val": "<strong>验证：</strong>即时检查您的 JSON 语法是否正确。",
        "json.faq.feat.min": "<strong>压缩：</strong>减小文件大小以便在生产环境中使用。",
        "json.faq.feat.sec": "<strong>安全：</strong>我们不会存储或发送您的数据到任何服务器。",

        // FAQ - Base64
        "base64.faq.title": "快速 Base64 编码/解码器",
        "base64.faq.desc": "使用我们的<strong>Base64 转换器</strong>轻松将文本转换为 Base64 字符串，或将 Base64 解码回可读文本。数据传输开发者的必备工具。",
        "base64.faq.feat.title": "工作原理：",
        "base64.faq.feat.enc": "<strong>编码：</strong>将纯文本（如 \"Hello\"）转换为 Base64 格式（如 \"SGVsbG8=\"）。",
        "base64.faq.feat.dec": "<strong>解码：</strong>将 Base64 字符串转换回原始文本。",
        "base64.faq.feat.safe": "<strong>安全：</strong>没有数据离开您的浏览器。",

        // FAQ - Markdown
        "md.faq.title": "实时 Markdown 编辑器",
        "md.faq.desc": "使用我们的<strong>Markdown 编辑器</strong>即时编写、编辑和预览 Markdown 内容。非常适合编写文档、README 文件或博客文章。",
        "md.faq.feat.title": "功能：",
        "md.faq.feat.live": "<strong>实时预览：</strong>随打随看。",
        "md.faq.feat.html": "<strong>HTML 导出：</strong>一键复制生成的 HTML 代码。",
        "md.faq.feat.local": "<strong>本地存储：</strong>您的文本保存在浏览器中，刷新页面不会丢失。",

        // FAQ - Timestamp
        "ts.faq.title": "Unix 时间戳转换器",
        "ts.faq.desc": "即时在 Unix Epoch 时间戳和人类可读日期之间转换。支持编程中使用的秒和毫秒格式。",
        "ts.faq.sub.title": "什么是 Unix 时间？",
        "ts.faq.sub.desc": "Unix 时间（也称为 Epoch 时间）是自 1970 年 1 月 1 日（UTC）以来经过的秒数。它广泛用于计算中以跟踪时间。",
        "ts.faq.feat.curr": "<strong>当前时间：</strong>显示实时跳动的 Unix 时间戳。",
        "ts.faq.feat.conv": "<strong>双向转换：</strong>将日期转换为时间戳或将时间戳转换为日期。",

        // Privacy & Terms
        "privacy.title": "隐私政策",
        "privacy.intro": "您的隐私对我们很重要。allinone.page 尊重您在其网站上可能收集的任何信息的隐私。",
        "privacy.h1": "1. 信息收集",
        "privacy.p1": "我们不收集任何个人数据。所有工具处理（如图片压缩、JSON 格式化）完全在您的浏览器（客户端）内进行。没有数据发送到我们的服务器。",
        "privacy.h2": "2. 本地存储",
        "privacy.p2": "我们使用本地存储来保存您的语言偏好（英文/中文）。此数据保留在您的设备上。",
        "privacy.h3": "3. 第三方服务",
        "privacy.p3": "我们可能会使用第三方 CDN 服务（如 Tailwind CSS, FontAwesome）加载资源。这些服务可能会收集标准访问日志。",

        "terms.title": "服务条款",
        "terms.h1": "1. 条款",
        "terms.p1": "访问本网站，即表示您同意受这些服务条款、所有适用法律和法规的约束，并同意您有负责遵守任何适用的当地法律。",
        "terms.h2": "2. 使用许可",
        "terms.p2": "允许暂时下载 Tool Directory 网站上的一份材料（信息或软件）副本，仅供个人、非商业性暂时查看。",
        "terms.h3": "3. 免责声明",
        "terms.p3": "allinone.page 网站上的材料按“原样”提供。allinone.page 不作任何明示或暗示的保证，特此声明并否认所有其他保证，包括但不限于适销性、特定用途适用性或不侵犯知识产权或其他侵犯权利的暗示保证或条件。"
    }
};

class I18nManager {
    constructor() {
        if (typeof window !== 'undefined') {
            this.currentLang = this.getInitialLanguage();
            this.init();
        }
    }

    getInitialLanguage() {
        // 1. Check URL parameter (Priority for SEO)
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && translations[langParam]) {
            return langParam;
        }

        // 2. Check localStorage
        const savedLang = localStorage.getItem('app_lang');
        if (savedLang && translations[savedLang]) return savedLang;

        // 3. Browser default
        const browserLang = navigator.language.toLowerCase();
        return browserLang.startsWith('zh') ? 'zh' : 'en';
    }

    init() {
        this.updateDOM();
        this.updateDirection();
    }

    setLanguage(lang) {
        if (!translations[lang]) return;
        if (this.currentLang === lang) return;

        // Save preference
        localStorage.setItem('app_lang', lang);

        // Update URL to trigger reload (SEO requirement)
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.location.href = url.toString();
    }

    t(key) {
        return translations[this.currentLang][key] || key;
    }

    updateDOM() {
        document.documentElement.lang = this.currentLang;
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);

            if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
                el.placeholder = translation;
            } else if (el.tagName === 'TEXTAREA' && el.getAttribute('placeholder')) {
                el.placeholder = translation;
                el.innerHTML = translation;
            } else {
                el.innerHTML = translation;
            }
        });

        // Global Nav Language Switcher State
        const btnEn = document.getElementById('lang-en');
        const btnZh = document.getElementById('lang-zh');
        if (btnEn && btnZh) {
            if (this.currentLang === 'en') {
                btnEn.classList.add('font-bold', 'text-blue-600');
                btnZh.classList.remove('font-bold', 'text-blue-600');
            } else {
                btnZh.classList.add('font-bold', 'text-blue-600');
                btnEn.classList.remove('font-bold', 'text-blue-600');
            }
        }

        // Dynamic Canonical Update (SEO)
        const canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            const url = new URL(window.location);
            if (this.currentLang === 'en') {
                url.searchParams.delete('lang');
            } else {
                url.searchParams.set('lang', this.currentLang);
            }
            canonicalLink.href = url.toString();
        }
    }

    updateDirection() {
        // Future proofing for RTL
    }
}

if (typeof window !== 'undefined') {

    window.i18n = new I18nManager();

    window.changeLanguage = (lang) => {
        window.i18n.setLanguage(lang);
    };
}

// Node.js support for build script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations };
}
