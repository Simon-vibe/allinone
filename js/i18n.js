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
        "tool.more.title": "More tools coming soon...",
        "tool.more.desc": "Stay tuned.",
        "footer.rights": "© 2023 Tool Directory. All rights reserved.",
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
        "about.form.send": "Send Message"
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
        "tool.more.title": "更多工具即将推出...",
        "tool.more.desc": "敬请期待。",
        "footer.rights": "© 2023 Tool Directory. 保留所有权利。",
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
        "about.form.send": "发送留言"
    }
};

class I18nManager {
    constructor() {
        this.currentLang = this.getInitialLanguage();
        this.init();
    }

    getInitialLanguage() {
        const savedLang = localStorage.getItem('app_lang');
        if (savedLang) return savedLang;

        const browserLang = navigator.language.toLowerCase();
        return browserLang.startsWith('zh') ? 'zh' : 'en';
    }

    init() {
        this.updateDOM();
        this.updateDirection();
    }

    setLanguage(lang) {
        if (!translations[lang]) return;
        this.currentLang = lang;
        localStorage.setItem('app_lang', lang);
        this.updateDOM();
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
            } else {
                el.textContent = translation;
            }
        });

        // Update active state in switcher if exists
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
    }

    updateDirection() {
        // Future proofing for RTL if needed, currently no-op
    }
}

// Initialize on load
window.i18n = new I18nManager();

// Global function for switcher
window.changeLanguage = (lang) => {
    window.i18n.setLanguage(lang);
};
