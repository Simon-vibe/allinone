const translations = {
    en: {
        "nav.home": "Home",
        "meta.title": "Tool Directory - Free Developer Tools & Converters",
        "meta.desc": "Free online developer tools including PDF to Excel converter, JSON formatter, Image compressor. Secure, client-side processing.",
        "meta.keywords": "developer tools, pdf converter, json formatter, image resizer, base64 encoder",
        "nav.categories": "Categories",
        "nav.about": "About",

        // Sidebar Categories
        "cat.featured": "Featured Tools",
        "cat.ai": "AI Lab",
        "cat.format": "Formatting & Conversion",
        "cat.media": "Images & Media",
        "cat.doc": "Documents & PDF",
        "cat.dev": "Coding & Security",

        // AI Lab Tools
        "tool.prompt.title": "Prompt Structure Builder",
        "tool.prompt.desc": "Build structured prompts for Claude & ChatGPT.",
        "tool.aicost.title": "AI Cost Estimator",
        "tool.aicost.desc": "Calculate API costs for OpenAI, Claude, and Gemini.",
        "tool.imgprompt.title": "Image Prompt Generator",
        "tool.imgprompt.desc": "Generate style prompts for Midjourney & Flux.",
        "tool.arena.title": "AI Model Arena",
        "tool.arena.desc": "Compare LLM capabilities, prices, and specs.",
        "tool.local.title": "Local LLM Runner",
        "tool.local.desc": "Run AI models privately in your browser using WebGPU.",

        // Feedback
        "feedback.title": "Send Feedback",
        "feedback.placeholder": "What's on your mind? Bug? Feature?",
        "feedback.button": "Send Feedback",
        "feedback.sending": "Sending...",
        "feedback.success": "Thanks! We got it.",
        "feedback.error": "Error sending feedback.",

        // Key Code
        "key.meta.title": "JavaScript Key Code Viewer - Event.key & Event.code",
        "key.meta.desc": "Press any key to get the JavaScript event key code, event code, and legacy which properties.",
        "key.meta.keywords": "javascript key code, keycode viewer, event.key, event.code, keyboard tester",
        "key.msg.press": "Press any key on your keyboard",
        "key.faq.title": "Common Questions (FAQ)",
        "key.faq.key.q": "What is event.key?",
        "key.faq.key.a": "The value of the key pressed, accounting for modifiers (e.g. Shift) and keyboard layout.",
        "key.faq.code.q": "What is event.code?",
        "key.faq.code.a": "Represents the physical key on the keyboard. It ignores layout language.",
        "key.faq.which.q": "Why is event.which deprecated?",
        "key.faq.which.a": "It is non-standard and inconsistent. Use event.key or event.code instead.",
        "nav.login": "Login",
        "hero.title": "All the tools you need, in one place.",
        "hero.subtitle": "A categorized collection of utilities, converters, and productivity tools.",
        "search.placeholder": "Search for a tool (e.g., JSON Formatter)...",
        "search.btn": "Search",
        "featured.title": "Featured Tools",
        "featured.viewAll": "View all",
        "tool.launch": "Launch Tool",

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
        "about.contact.hint": "Have a question, feedback, or found a bug? Please use the feedback button in the bottom right corner to send us a message directly.",


        // PDF Converter
        "pdf.drag.title": "Drop PDF File Here",
        "pdf.drag.subtitle": "or click to select file",
        "pdf.status.processing": "Processing PDF...",

        // PDF to Word
        "tool.pdf2word.title": "PDF to Word Converter",
        "tool.pdf2word.desc": "Extract text from PDF files and save as Word (.docx) documents locally.",
        "pdf2word.meta.title": "PDF to Word Converter - Free Online PDF to Docx",
        "pdf2word.meta.desc": "Convert PDF to Word (Docx) documents online for free. Extract text from PDF securely in your browser. No upload required.",
        "pdf2word.meta.keywords": "pdf to word, pdf to docx, convert pdf to word, online pdf converter, free pdf tool",
        "pdf2word.faq.title": "How to Convert PDF to Word?",
        "pdf2word.faq.desc": "Our tool extracts text from your PDF files and creates a new Microsoft Word document (.docx). It's fast, free, and secure.",
        "pdf2word.feat.1": "<strong>Text Extraction:</strong> Accurately pulls text from standard PDFs.",

        // Merge PDF
        "tool.merge.title": "Merge PDF",
        "tool.merge.desc": "Combine multiple PDF files into one single document. Drag and drop to reorder.",
        "merge.meta.title": "Merge PDF - Combine PDF Files Online for Free",
        "merge.meta.desc": "Merge multiple PDF files into one document online. Fast, secure, and client-side processing. No upload limits.",
        "merge.meta.keywords": "merge pdf, combine pdf, join pdf, online pdf merger, free pdf tool",
        "merge.drag.title": "Drop PDFs Here",
        "merge.drag.subtitle": "or click to select files",
        "merge.action.select_files": "Select Files",
        "merge.list.title": "Selected Files",
        "merge.list.hint": "Drag to reorder",
        "merge.action.add_more": "Add More",
        "merge.action.merge": "Merge PDFs",
        "merge.status.processing": "Merging PDFs...",
        "merge.status.ready": "Merge Complete!",
        "merge.faq.title": "How to Merge PDF Files?",
        "merge.faq.desc": "Combine multiple PDF documents into a single file with our free online tool. Support for drag-and-drop reordering.",
        "merge.feat.1": "<strong>Drag & Drop:</strong> Easily upload and reorder your files.",

        // PDF to JPG
        "tool.pdf2jpg.title": "PDF to JPG Converter",
        "tool.pdf2jpg.desc": "Convert each page of your PDF into high-quality JPG images. Download singly or as a ZIP archive.",
        "pdf2jpg.meta.title": "PDF to JPG Converter - Convert PDF Pages to Images",
        "pdf2jpg.meta.desc": "Convert PDF pages to JPG images online. Free, secure, and high-quality. Download all pages as a ZIP file.",
        "pdf2jpg.meta.keywords": "pdf to jpg, pdf to image, convert pdf to jpg, pdf to png, online pdf converter",
        "pdf2jpg.status.ready": "Images Ready!",
        "pdf2jpg.download_zip": "Download ZIP",
        "pdf2jpg.faq.title": "How to Convert PDF to JPG?",
        "pdf2jpg.faq.desc": "Convert PDF pages into individual JPG images instantly. Best for sharing documents as images on social media.",
        "pdf2jpg.feat.1": "<strong>High Quality:</strong> Renders pages at high resolution.",

        // Image Converter
        "tool.imgconv.title": "Image Converter",
        "tool.imgconv.desc": "Convert images to JPG, PNG, or WebP format instantly. Supports bulk conversion.",
        "imgconv.meta.title": "Image Converter - WebP to JPG, PNG to ID, etc.",
        "imgconv.meta.desc": "Convert images online. WebP to JPG, PNG to JPG, HEIC to JPG. Free, secure, client-side bulk conversion.",
        "imgconv.meta.keywords": "image converter, webp to jpg, png to jpg, photo converter, online image tool",
        "imgconv.label.format": "Convert to:",
        "imgconv.status.processing": "Converting images...",
        "imgconv.preview": "Previews",
        "imgconv.faq.title": "Image Converter FAQ",
        "imgconv.faq.desc": "Easily convert WebP to JPG, PNG to JPG, and more. Our tool processes files instantly in your browser.",
        "imgconv.feat.1": "<strong>WebP to JPG:</strong> Fix compatibility issues by converting WebP to standard JPG.",
        "imgconv.feat.2": "<strong>Batch Processing:</strong> Convert multiple images at once.",

        // Background Remover
        "tool.bgrem.title": "Background Remover",
        "tool.bgrem.desc": "Remove background from photos automatically using AI. 100% Client-side privacy.",
        "bgrem.meta.title": "Background Remover - Remove Image Background Online",
        "bgrem.meta.desc": "Remove background from images automatically. Free AI background eraser. Transparent background in seconds.",
        "bgrem.meta.keywords": "background remover, remove background, transparent background, ai background eraser, free image tool",
        "bgrem.status.processing": "Removing background... (This may take a moment)",
        "bgrem.note.model": "First time use requires downloading AI model (~50MB).",
        "bgrem.result": "Background Removed",
        "bgrem.faq.title": "How to Remove Background?",
        "bgrem.faq.desc": "Our AI-powered tool automatically detects the subject and removes the background, leaving you with a transparent PNG.",
        "bgrem.feat.1": "<strong>AI Powered:</strong> Precise edge detection and subject isolation.",

        // QR Generator
        "tool.qr.title": "QR Code Generator",
        "tool.qr.desc": "Create custom QR codes for URLs, text, contact info, and more.",
        "qr.meta.title": "QR Code Generator - Create Custom QR Codes",
        "qr.meta.desc": "Free online QR code generator. Create custom QR codes for URLs, text, Wi-Fi, and more. Download high-quality PNG images.",
        "qr.meta.keywords": "qr code generator, create qr code, make qr code, free qr tool, online qr generator",
        "qr.label.text": "Content",
        "qr.placeholder.text": "Enter text or URL here...",
        "qr.label.size": "Size (px)",
        "qr.label.color": "Color",
        "qr.action.generate": "Generate QR Code",
        "qr.preview.placeholder": "QR Code will appear here",
        "qr.faq.title": "QR Code Generator FAQ",
        "qr.faq.desc": "Create static QR codes instantly. They never expire and work forever.",
        "qr.feat.1": "<strong>Customizable:</strong> Adjust size and color.",
        "qr.feat.2": "<strong>Static Codes:</strong> The data is embedded directly in the image.",

        // UUID Generator
        "tool.uuid.title": "UUID Generator",
        "tool.uuid.desc": "Generate random Version 4 UUIDs (Universally Unique Identifiers) instantly.",
        "uuid.meta.title": "UUID/GUID Generator - Bulk Random UUIDs",
        "uuid.meta.desc": "Generate random UUIDs (v4) online suitable for databases and unique identifiers. Bulk generation instantly.",
        "uuid.meta.keywords": "uuid generator, guid generator, random uuid, unique identifier, version 4 uuid",
        "uuid.settings": "Settings",
        "uuid.label.quantity": "Quantity",
        "uuid.label.hyphens": "Hyphens",
        "uuid.label.uppercase": "Uppercase",
        "uuid.action.generate": "Generate UUIDs",
        "uuid.faq.title": "UUID Generator FAQ",
        "uuid.faq.desc": "Generate RFC4122 compliant Version 4 UUIDs. Useful for database keys, software testing, and unique identifiers.",
        "uuid.feat.1": "<strong>Bulk Generation:</strong> Generate up to 1000 UUIDs at once.",
        "uuid.feat.2": "<strong>Customizable:</strong> Option for uppercase or removing hyphens.",

        // Password Generator
        "tool.pwd.title": "Password Generator",
        "tool.pwd.desc": "Create strong, secure passwords to protect your accounts. Generated locally, never stored.",
        "pwd.meta.title": "Password Generator - Strong & Secure Passwords",
        "pwd.meta.desc": "Create strong, secure, and random passwords online. Customizable length and characters. 100% client-side security.",
        "pwd.meta.keywords": "password generator, strong password, secure password, random password tool, online password maker",
        "pwd.label.length": "Length",
        "pwd.opt.uppercase": "Uppercase (A-Z)",
        "pwd.opt.lowercase": "Lowercase (a-z)",
        "pwd.opt.numbers": "Numbers (0-9)",
        "pwd.opt.symbols": "Symbols (!@#$)",
        "pwd.faq.title": "Password Generator FAQ",
        "pwd.faq.desc": "Create secure passwords to keep your online accounts safe. Our tool runs locally in your browser.",
        "pwd.feat.1": "<strong>Secure:</strong> Generated locally, never transmitted.",
        "pwd.feat.2": "<strong>Customizable:</strong> Choose length and character types.",

        // Diff Checker
        "tool.diff.title": "Diff Checker",
        "tool.diff.desc": "Compare texts to find the difference between two files.",
        "diff.meta.title": "Diff Checker - Compare Text Files Online",
        "diff.meta.desc": "Compare two text files or snippets side-by-side to find differences. Highlight changes, added, and removed lines instantly.",
        "diff.meta.keywords": "diff checker, compare text, text difference, diff tool, online file compare",
        "diff.type.chars": "Chars",
        "diff.type.words": "Words",
        "diff.type.lines": "Lines",
        "diff.label.original": "Original Text",
        "diff.label.changed": "New Text",
        "diff.action.compare": "Find Difference",
        "diff.faq.title": "Diff Checker FAQ",
        "diff.faq.desc": "Quickly find differences between two blocks of text. Supports character, word, and line comparison.",
        "diff.feat.1": "<strong>Visual Diff:</strong> Clearly highlights additions (green) and removals (red).",
        "diff.feat.2": "<strong>Multiple Modes:</strong> Compare by characters, words, or lines.",
        "diff.action.upload": "Upload File",

        // OCR
        "tool.ocr.title": "Image OCR",
        "tool.ocr.desc": "Convert images to text using AI. Runs 100% in your browser.",
        "ocr.meta.title": "Free Online OCR - Convert Image to Text",
        "ocr.meta.desc": "Convert images to text online for free. Support for English, Chinese, and multiple languages. 100% Client-side privacy.",
        "ocr.meta.keywords": "ocr online, image to text, extract text from image, free ocr, tesseract.js",
        "ocr.drag.title": "Drop Image Here",
        "ocr.drag.subtitle": "or click to select file",
        "ocr.settings": "Settings",
        "ocr.lang": "Language",
        "ocr.preview": "Image Preview",
        "ocr.faq.title": "OCR Tool FAQ",
        "ocr.faq.desc": "Extract text from images automatically. Our OCR tool uses advanced machine learning to recognize text in your photos.",
        "ocr.feat.1": "<strong>Multi-Language:</strong> Support for English, Chinese, and more.",
        "ocr.feat.2": "<strong>Privacy First:</strong> All processing is done in your browser. No image uploads.",
        "ocr.feat.3": "<strong>Free:</strong> Unlimited use without cost.",

        // EXIF Viewer
        "tool.exif.title": "EXIF Viewer",
        "tool.exif.desc": "View hidden metadata in your images. Camera model, settings, GPS, and more.",
        "exif.meta.title": "EXIF Data Viewer - View Image Metadata Online",
        "exif.meta.desc": "View hidden EXIF metadata in your photos instantly. Check ISO, shutter speed, GPS location, and camera model. 100% Client-side.",
        "exif.meta.keywords": "exif viewer, image metadata, view details, check photo location, online exif tool",
        "exif.drag.title": "Drop Image Here",
        "exif.drag.subtitle": "or click to select file",
        "exif.warn.gps.title": "Location Data Found",
        "exif.warn.gps.desc": "This image contains GPS coordinates. Be careful when sharing it publicly.",
        "exif.data.title": "Image Metadata",
        "exif.data.empty": "Upload an image to view its EXIF data.",
        "exif.faq.title": "EXIF Viewer FAQ",
        "exif.faq.desc": "EXIF (Exchangeable Image File Format) data files contain information about how the image was taken.",
        "exif.feat.1": "<strong>Camera Details:</strong> Manufacturer, Model, Lens info.",
        "exif.feat.2": "<strong>Settings:</strong> Shutter speed, Aperture, ISO, Focal length.",
        "exif.feat.3": "<strong>GPS:</strong> Latitude, Longitude, Altitude (if enabled).",

        // JSON <-> YAML
        "tool.yaml.title": "JSON <> YAML Converter",
        "tool.yaml.desc": "Convert between JSON and YAML formats instantly.",
        "yaml.meta.title": "JSON <> YAML Converter - Online Two-way Conversion",
        "yaml.meta.desc": "Convert JSON to YAML and YAML to JSON instantly. Free online converter for developers and DevOps.",
        "yaml.meta.keywords": "json to yaml, yaml to json, json converter, yaml converter, online dev tools",
        "yaml.auto": "Conversion happens automatically as you type.",
        "yaml.faq.title": "JSON & YAML Converter FAQ",
        "yaml.faq.desc": "Easily switch between JSON and YAML formats. Essential for Kubernetes configuration and API development.",
        "yaml.feat.1": "<strong>Bidirectional:</strong> Type in either box to convert to the other.",
        "yaml.feat.2": "<strong>Real-time:</strong> Instant conversion without clicking buttons.",
        "yaml.feat.3": "<strong>Validation:</strong> Error messages help you fix syntax issues.",

        // Token Counter
        "tool.token.title": "LLM Token Counter",
        "tool.token.desc": "Count tokens and estimate costs for GPT-4, Claude, and Gemini.",
        "token.meta.title": "LLM Token Counter - GPT-4/Claude Cost Calculator",
        "token.meta.desc": "Count tokens for GPT-3.5, GPT-4, and Claude. Estimate API costs instantly for your prompts.",
        "token.meta.keywords": "token counter, gpt token count, llm prompt cost, claude tokenizer, openai tokens",
        "token.cost.title": "Estimated Cost (Input + Output)",
        "token.label.count": "Token Count (Total)",
        "token.label.input": "Input Text (Prompt)",
        "token.label.output": "Estimated Output Tokens (Completion)",
        "token.label.chars": "Characters:",
        "token.faq.title": "Token Counter FAQ",
        "token.faq.desc": "Understanding token usage is crucial for managing costs when working with Large Language Models (LLMs) like ChatGPT and Claude.",
        "token.feat.1": "<strong>Not just words:</strong> 1000 tokens is approximately 750 words.",
        "token.feat.2": "<strong>Tokenizer:</strong> We use the standard `cl100k_base` encoding logic used by GPT-4.",

        // Word Counter
        "tool.word.title": "Word Counter",
        "tool.word.desc": "Count words, characters, sentences, and paragraphs. Estimate reading time.",
        "word.meta.title": "Word Counter - Count Words, Characters, and Reading Time",
        "word.meta.desc": "Free online word counter. Count characters, words, sentences, and paragraphs. Estimate reading time.",
        "word.meta.keywords": "word counter, character count, reading time, sentence counter, online writing tools",
        "word.stat.words": "Words",
        "word.stat.chars": "Characters",
        "word.stat.sentences": "Sentences",
        "word.stat.paragraphs": "Paragraphs",
        "word.read.time": "Reading Time:",
        "word.speak.time": "Speaking Time:",
        "word.faq.title": "Word Counter FAQ",
        "word.faq.desc": "A simple, effective tool for writers, students, and professionals to track text statistics.",
        "word.feat.1": "<strong>Reading Time:</strong> Based on an average reading speed of 200 words per minute.",
        "word.feat.2": "<strong>Speaking Time:</strong> Based on an average speaking speed of 130 words per minute.",

        // SVG Sandbox
        "tool.svg.title": "SVG Sandbox",
        "tool.svg.desc": "Code, edit, and preview SVG graphics in real-time.",
        "svg.meta.title": "SVG Sandbox - Online SVG Editor & Preview",
        "svg.meta.desc": "Edit and preview SVG code in real-time. A simple playground for testing and tweaking Scalable Vector Graphics.",
        "svg.meta.keywords": "svg editor, svg playground, svg preview, modify svg, vector graphics tool",
        "svg.faq.title": "SVG Sandbox FAQ",
        "svg.faq.desc": "Scalable Vector Graphics (SVG) is an XML-based vector image format for two-dimensional graphics.",
        "svg.feat.1": "<strong>Real-time Preview:</strong> See changes instantly as you type code.",
        "svg.feat.2": "<strong>Transparent Grid:</strong> Check your graphics against a transparent background.",
        "svg.feat.3": "<strong>Download:</strong> Save your work as an .svg file.",

        // URL to Markdown
        "tool.md.title": "URL to Markdown",
        "tool.md.desc": "Extract content from webpages and convert to Markdown for LLMs.",
        "md.meta.title": "URL to Markdown Converter - Extract Content for AI",
        "md.meta.desc": "Convert any webpage to clean Markdown for ChatGPT and Claude. Extract main content and remove clutter.",
        "md.meta.keywords": "url to markdown, html to markdown, web scraper, content extractor, ai prompt tool",
        "md.label.html": "Paste HTML Source Code Here:",
        "md.label.result": "Markdown Result",
        "md.tip": "Tip: Right-click page -> 'View Page Source' -> Copy All -> Paste here. This ensures 100% accuracy.",
        "md.action.convert": "Convert to Markdown",
        "md.faq.title": "URL to Markdown FAQ",
        "md.faq.desc": "Why use Markdown? It's the cleanest text format for Large Language Models. Pasting HTML directly into ChatGPT often confuses it with scripts and styles.",
        "md.feat.1": "<strong>Readability:</strong> We utilize Mozilla's Readability engine to isolate the main article content.",
        "md.feat.2": "<strong>Turndown:</strong> Converts the cleaned HTML into standard Markdown.",
        "md.feat.3": "<strong>Privacy:</strong> Conversion happens entirely in your browser.",
        "md.input.paste": "Paste HTML Source",
        "md.input.url": "Fetch from URL",
        "md.label.url": "Enter URL:",
        "md.placeholder.url": "https://example.com/article",
        "md.cors.note": "Note: Uses a public CORS proxy. Some sites may block this.",

        // Text to Speech
        "tool.tts.title": "Text to Speech",
        "tool.tts.desc": "Convert text to lifelike speech using your browser's built-in voices.",
        "tts.meta.title": "Text to Speech (TTS) - Free Online Voice Reader",
        "tts.meta.desc": "Convert text to speech instantly. Free, unlimited, and runs locally using your browser's built-in voices.",
        "tts.meta.keywords": "text to speech, tts online, free tts, voice reader, speech synthesis",
        "tts.label.voice": "Select Voice",
        "tts.label.rate": "Speed",
        "tts.label.pitch": "Pitch",
        "tts.loading.voices": "Loading voices...",
        "tts.tip": "Tip: Different browsers (Chrome, Safari, Edge) offer different voices. Try simpler sentences for better results.",
        "tts.faq.title": "Text to Speech FAQ",
        "tts.faq.desc": "Browser-based text-to-speech technology allows you to listen to written content without installing any software.",
        "tts.feat.1": "<strong>Free & Unlimited:</strong> No character limits or subscription fees.",
        "tts.feat.2": "<strong>Privacy:</strong> Processing happens locally on your device.",
        "tts.feat.3": "<strong>Multiple Voices:</strong> Access all voices provided by your operating system.",

        // Key Code Viewer
        "tool.key.title": "Key Code Viewer",
        "tool.key.desc": "Press any key to get the JavaScript event key code.",
        "key.meta.title": "JavaScript Key Code Viewer - Event.key & Event.code",
        "key.meta.desc": "Press any key to get the JavaScript event key code, event code, and legacy which properties. Essential for web developers.",
        "key.meta.keywords": "javascript key code, keycode viewer, event.key, event.code, keyboard tester",
        "key.msg.press": "Press any key on your keyboard",

        // Social Image Cropper
        "tool.crop.title": "Social Media Image Cropper",
        "tool.crop.desc": "Crop images perfectly for Instagram, Twitter, YouTube, and LinkedIn.",
        "crop.meta.title": "Social Media Image Cropper - Resize for Insta, Twitter, YT",
        "crop.meta.desc": "Crop and resize images for social media instantly. Presets for Instagram, Twitter/X, YouTube, LinkedIn, and more.",
        "crop.meta.keywords": "image cropper, social media resizer, instagram crop, twitter header size, youtube thumbnail maker",
        "crop.label.presets": "Crop Presets",
        "crop.action.new": "Upload New Image",
        "crop.faq.title": "Image Cropper FAQ",
        "crop.faq.desc": "Correct image sizes are key to increasing engagement on social media platforms.",
        "crop.size.title": "Common Social Media Sizes (2025)",
        "crop.preset.instagram": "Instagram",
        "crop.preset.square": "Square",
        "crop.preset.portrait": "Portrait",
        "crop.preset.landscape": "Landscape",
        "crop.preset.twitter": "Twitter / X",
        "crop.preset.header": "Header",
        "crop.preset.post": "Post",
        "crop.preset.youtube": "YouTube",
        "crop.preset.thumbnail": "Thumbnail",
        "crop.preset.custom": "Custom",
        "crop.preset.free": "Free Form",
        "crop.label.width": "Width (px)",
        "crop.label.height": "Height (px)",
        "crop.action.apply": "Apply Size",
        "crop.platform.instagram": "Instagram",
        "crop.platform.twitter": "Twitter / X",
        "crop.platform.youtube": "YouTube",
        "crop.faq.insta1": "Square: 1080 x 1080 px (1:1)",
        "crop.faq.insta2": "Portrait: 1080 x 1350 px (4:5)",
        "crop.faq.insta3": "Story: 1080 x 1920 px (9:16)",
        "crop.alert.img_only": "Please upload an image file.",

        // User Agent Info
        "tool.ua.title": "What is my User Agent?",
        "tool.ua.desc": "Instantly check your browser, OS, and system information.",
        "ua.meta.title": "What is my User Agent? - Browser Info Tool",
        "ua.meta.desc": "Instantly check your User Agent string, browser version, operating system, and screen resolution.",
        "ua.meta.keywords": "user agent, what is my user agent, browser info, screen resolution, my ip, system info",
        "ua.label.ua": "Your User Agent String",
        "ua.label.browser": "Browser",
        "ua.label.os": "OS",
        "ua.label.screen": "Screen Resolution",
        "ua.label.ip": "IP Address",
        "ua.faq.title": "User Agent FAQ",
        "ua.faq.desc": "A User Agent is a string of text that your browser sends to websites to identify itself.",
        "ua.feat.1": "<strong>Troubleshooting:</strong> Support teams often ask for this to diagnose issues.",
        "ua.feat.2": "<strong>Content Delivery:</strong> Websites use it to serve mobile or desktop versions.",
        "ua.feat.3": "<strong>Analytics:</strong> Helps webmasters understand their audience's devices.",


        // Secure Encryption
        "tool.crypto.title": "Secure File Encryption",
        "tool.crypto.desc": "Encrypt and decrypt files locally using bank-grade AES-GCM technology. Your data never leaves your device.",
        "crypto.meta.title": "Secure File Encryption - Bank Grade AES-GCM Online",
        "crypto.meta.desc": "Encrypt files and text securely in your browser using AES-GCM 256-bit encryption. No data is sent to any server.",
        "crypto.meta.keywords": "file encryption, encrypt online, aes-gcm, browser encryption, secure file transfer",
        "crypto.label.encrypt": "Encrypt",
        "crypto.msg.drop_enc": "Drop file here to Encrypt",
        "crypto.label.pass": "Password",
        "crypto.action.encrypt": "Encrypt File",
        "crypto.msg.enc_success": "Encryption Successful!",
        "crypto.label.decrypt": "Decrypt",
        "crypto.msg.drop_dec": "Drop .enc file here to Decrypt",
        "crypto.action.decrypt": "Decrypt File",
        "crypto.msg.dec_success": "Decryption Successful!",
        "crypto.faq.title": "Secure Encryption FAQ",
        "crypto.faq.desc": "We use the Web Crypto API, which is built into your browser, to perform military-grade AES-GCM encryption without ever sending data to a server.",
        "crypto.feat.1": "<strong>PBKDF2:</strong> Your password is salted and hashed 100,000 times to generate a secure encryption key.",
        "crypto.feat.2": "<strong>AES-GCM:</strong> We use Authenticated Encryption (AES-GCM 256-bit) to ensure both confidentiality and integrity.",
        "crypto.feat.3": "<strong>Client-Side Only:</strong> Since it runs in your browser, even we cannot see your files or passwords.",

        // CORS Tester
        "tool.cors.title": "CORS Fetch Tester",
        "tool.cors.desc": "Debugging Cross-Origin policies is hard. This tool makes it easy by testing APIs directly from your browser.",
        "cors.meta.title": "CORS Fetch Tester - Debug Cross-Origin Requests Online",
        "cors.meta.desc": "Debug CORS (Cross-Origin Resource Sharing) issues by sending real Fetch requests from your browser. Analyze headers and status codes.",
        "cors.meta.keywords": "cors tester, test cors online, cross origin resource sharing, debug cors, fetch api tester",
        "cors.label.req": "Request Details",
        "cors.action.send": "Send Request",
        "cors.label.examples": "Example Tests",
        "cors.label.response": "Response",
        "cors.msg.waiting": "Waiting for request...",
        "cors.err.desc": "The browser blocked this request. This usually means the server is missing the Access-Control-Allow-Origin header.",
        "cors.faq.title": "CORS Tester FAQ",
        "cors.faq.desc": "CORS (Cross-Origin Resource Sharing) is a security mechanism that allows a web page from one domain to request resources from another domain.",

        // SQL Formatter
        "tool.sql.title": "SQL Formatter",
        "tool.sql.desc": "Beautify and format your SQL queries for better readability. Supports various dialects.",
        "sql.meta.title": "SQL Formatter - Beautify SQL Queries Online",
        "sql.meta.desc": "Format and beautify your SQL queries online. Support for MySQL, PostgreSQL, SQL Server, and more. Free and client-side.",
        "sql.meta.keywords": "sql formatter, sql beautifier, format sql, pretty print sql, online sql tool",
        "sql.label.input": "Input SQL",
        "sql.label.dialect": "Dialect:",
        "sql.action.format": "Format Code",
        "sql.faq.title": "SQL Formatter FAQ",
        "sql.faq.desc": "Organize and beautify your SQL queries. Makes complex queries easy to read.",
        "sql.feat.1": "<strong>Multi-Dialect:</strong> Supports MySQL, PostgreSQL, SQL Server, and more.",
        "sql.feat.2": "<strong>Customizable:</strong> Adjust indentation (2 spaces by default).",

        // Common
        "common.features": "Features",
        "common.client_side": "Client-Side",
        "common.free": "Free",
        "common.download": "Download",
        "common.reset": "Convert Another",
        "common.new": "NEW",
        "common.popular": "POPULAR",
        "common.open": "Open",
        "common.copied": "Copied",
        "common.copy_failed": "Copy Failed",

        // About Page
        "about.explore": "Explore Tools",
        "about.story": "Read Our Story",
        "about.team.role.lead": "Lead Developer",
        "about.team.role.design": "UI/UX Designer",
        "about.team.role.backend": "Backend Engineer",
        "about.form.option.general": "General Inquiry",
        "about.form.option.bug": "Bug Report",
        "about.form.option.feature": "Feature Request",

        // Tool JS Messages
        "base64.error.fail": "Encoding failed. Please check your input.",
        "base64.error.decode": "Decoding failed: Invalid Base64 string.",

        "img.opt.jpeg": "JPEG (Recommended)",
        "img.opt.png": "PNG (Lossless/Transparent)",
        "img.opt.webp": "WebP (Modern)",
        "img.stat.reduction": "Reduction",
        "img.action.download_image": "Download Image",

        "json.error.invalid": "Invalid JSON: ",
        "json.success.copied": "Copied",

        "ts.action.pause": "Pause Update",
        "ts.action.resume": "Resume Update",
        "ts.success.copied": "Copied: ",

        "md.success.copied": "Copied!",
        "md.init.text": "# Welcome!\\n\\nThis is a simple **Markdown Editor**.\\n\\n- Real-time preview\\n- Clean interface\\n- Pure client-side\\n\\n`console.log('Hello World');`\\n",

        "pdf.status.ready": "Ready to Download",
        "pdf.status.error": "Error processing file",
        "pdf.preview.title": "Preview Extracted Data",
        "pdf.action.select_file": "Select File",
        "pdf.action.download_excel": "Download Excel (.xlsx)",
        "pdf.action.download_csv": "Download CSV",
        "pdf.note.privacy": "🔒 Processed locally. Your data never leaves this browser.",
        "pdf.password.title": "Password Required",
        "pdf.password.desc": "This PDF is encrypted. Please enter the password to proceed.",
        "pdf.password.placeholder": "Enter password",
        "pdf.password.incorrect": "Incorrect password. Please try again.",
        "pdf.error.no_text": "No text found. This document might be scanned (images only). Please use our OCR tool instead.",
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
        // Meta - PDF
        "pdf.meta.title": "Bank Statement Converter - PDF to Excel (Secure & Local)",
        "pdf.meta.desc": "Convert PDF bank statements to Excel (XLSX) instantly in your browser. Privacy-first: no file upload, 100% client-side processing.",
        "pdf.meta.keywords": "pdf to excel, bank statement converter, pdf to xlsx, secure pdf converter, client side pdf tool",

        // Meta - JSON
        "json.meta.title": "JSON Formatter & Validator - Minify, Beautify Online",
        "json.meta.desc": "Free online JSON formatter. Validate, beautify, and minify JSON data. Clear syntax highlighting and error detection. Secure local processing.",
        "json.meta.keywords": "json formatter, json validator, json beautifier, json minify, online json tool",

        // Meta - Image
        "img.meta.title": "Image Compressor - Optimize PNG, JPG, WebP Online",
        "img.meta.desc": "Compress images online without losing quality. Reduce file size for PNG, JPEG, and WebP. Private client-side compression, no uploads.",
        "img.meta.keywords": "image compressor, online image optimizer, reduce image size, png compressor, jpg compressor",

        // Meta - Base64
        "base64.meta.title": "Base64 Encoder / Decoder - Online String Converter",
        "base64.meta.desc": "Fast Base64 encode and decode tool. Convert text to Base64 or decode Base64 strings. Developer friendly, handle large strings securely.",
        "base64.meta.keywords": "base64 encoder, base64 decoder, base64 converter, string to base64, base64 to text",

        // Meta - Markdown
        "md.meta.title": "Markdown Editor - Live Preview & HTML Export",
        "md.meta.desc": "Online Markdown editor with real-time preview. Write Markdown and export to HTML instantly. Features split-view and local storage saving.",
        "md.meta.keywords": "markdown editor, online markdown, markdown preview, markdown to html, writing tool",

        // Meta - Timestamp
        "ts.meta.title": "Unix Timestamp Converter - Epoch to Date / Date to Epoch",
        "ts.meta.desc": "Convert Unix timestamps to human-readable dates and vice versa. Supports seconds and milliseconds. Real-time current epoch time.",
        "ts.meta.keywords": "unix timestamp converter, epoch converter, timestamp to date, date to timestamp, unix time",

        // Specific Tool Headers (En)
        "aicost.title.estimated": "Estimated Cost per Request",
        "aicost.title.understanding": "Understanding LLM API Pricing",
        "aicost.title.tokens": "Input vs Output Tokens",
        "aicost.faq.title": "Frequently Asked Questions",

        // Background Remover
        "bgrem.seo.keywords_label": "Related Keywords:",
        "bgrem.seo.keywords": "background remover, ai background removal, free online tool",
        "bgrem.seo.faq.title": "Frequently Asked Questions",

        // Base64
        "base64.seo.keywords_label": "Related Keywords:",
        "base64.seo.keywords": "base64 encoder, base64 decoder, online converter",

        // Diff Checker
        "diff.seo.keywords_label": "Related Keywords:",
        "diff.seo.keywords": "text diff, code diff, compare text online",
        "diff.seo.h2": "Online Text Diff Checker",

        // Image Compressor
        "img.seo.keywords_label": "Related Keywords:",
        "img.seo.keywords": "image compressor, reduce image size, lossless compression",
        "img.seo.faq.title": "Frequently Asked Questions",
        "img.seo.h2_compress": "Compress Images Online Without Losing Quality",
        "img.seo.h2_faq": "Frequently Asked Questions",

        // Image Prompt Gen
        "imgprompt.seo.h2": "Mastering Midjourney Prompts",

        // JSON
        "json.seo.keywords_label": "Related Keywords:",
        "json.seo.keywords": "json formatter, json validator, json beautifier",
        "json.seo.h2": "Best Free Online JSON Validator and Beautifier",

        // Local LLM
        "local.seo.h2": "Running LLMs Locally with WebGPU",

        // Markdown
        "md.seo.keywords_label": "Related Keywords:",
        "md.seo.keywords": "markdown editor, online preview, writing tool",

        // Model Arena
        "arena.seo.h2": "Choosing the Right LLM for Your Task",

        // Password
        "pwd.seo.keywords_label": "Related Keywords:",
        "pwd.seo.keywords": "password generator, strong password, security tool",
        "pwd.seo.h2": "Secure Random Password Generator",

        // Prompt Builder
        "prompt.seo.faq.title": "Frequently Asked Questions",
        "prompt.seo.h2": "How to Write Better AI Prompts",
        "prompt.seo.h2_faq": "Frequently Asked Questions",

        // QR
        "qr.seo.keywords_label": "Related Keywords:",
        "qr.seo.keywords": "qr code generator, online qr code, free tool",
        "qr.seo.h2": "Free Custom QR Code Generator",

        // UUID
        "uuid.seo.title": "Bulk UUID/GUID Generator",
        "uuid.seo.desc": "Generate Version 4 UUIDs (Universally Unique Identifiers) instantly. Useful for database keys and testing.",
        "uuid.seo.keywords_label": "Related Keywords:",
        "uuid.seo.keywords": "uuid generator, guid generator, random id",

        // Meta - Pages
        "about.meta.title": "About AllInOne - Free Developer Tools",
        "about.meta.desc": "Learn more about AllInOne.page. We build free, privacy-focused developer tools that run entirely in your browser.",
        "about.meta.keywords": "about allinone, developer tools team, privacy focus, client side tools",

        "privacy.meta.title": "Privacy Policy - AllInOne",
        "privacy.meta.desc": "Our privacy commitment: zero data collection. All tools run client-side. Read our full privacy policy.",
        "privacy.meta.keywords": "privacy policy, no data collection, secure tools",

        "terms.meta.title": "Terms of Service - AllInOne",
        "terms.meta.desc": "Terms and conditions for using AllInOne.page developer tools.",
        "terms.meta.keywords": "terms of service, usage terms, legal",

        // New Tool Keys (OCR)
        "ocr.lang": "Language",
        "ocr.status.processing": "Processing Image...",
        "ocr.status.error": "Error during OCR processing",

        // SQL
        "sql.label.keywordCase": "Keyword Case",
        "sql.label.indent": "Indentation",
        "sql.opt.preserve": "Preserve",
        "sql.opt.upper": "Upper Case",
        "sql.opt.lower": "Lower Case",
        "sql.opt.space2": "2 Spaces",
        "sql.opt.space4": "4 Spaces",
        "sql.opt.tab": "Tab",

        // Cropper
        "crop.label.bg": "Background Color",
        "crop.bg.desc": "Fill transparent areas when fitting image",

        // QR
        "qr.tab.generate": "Generate",
        "qr.tab.scan": "Scan / Decode",
        "qr.scan.upload": "Upload QR Image",
        "qr.scan.result": "Decoded Result",

        // YAML
        "yaml.style.label": "Output Style",
        "yaml.style.block": "Block (Default)",
        "yaml.style.flow": "Flow (JSON-like)",
        // Video


        // BgRemover
        "bgrem.tab.ai": "AI Auto",
        "bgrem.tab.manual": "Magic Wand",
        "bgrem.manual.desc": "Click on image to remove color. Adjust tolerance.",
        "bgrem.manual.tolerance": "Tolerance",
        "common.undo": "Undo",

        // Token
        "token.img.title": "Image Cost (Multimodal)",
        "token.img.tokens": "Image Tokens:",
        "token.img.desc": "Based on GPT-4 Vision high-res calculation.",

        // New SEO & Dynamic Keys
        "pdf.seo.h2": "How to Convert PDF Bank Statements to Excel for Free",
        "pdf.seo.keywords_label": "Related Keywords:",
        "pdf.seo.keywords": "convert pdf to excel bank statement free online",
        "pdf.seo.p1": "Extracting table data from PDF bank statements or invoices can be tedious. Our <strong>Free PDF to Excel Converter</strong> uses advanced parsing to detect tables and export them directly to .xlsx format, entirely in your browser.",
        "pdf.seo.h3_local": "Why convert locally?",
        "pdf.seo.p2": "Financial documents contain sensitive data. By converting locally (Client-side), you ensure no data is ever sent to a remote server, guaranteeing 100% privacy.",
        "pdf.seo.faq.title": "Frequently Asked Questions",
        "pdf.seo.faq.q1": "Does this work with scanned PDFs?",
        "pdf.seo.faq.a1": "Currently, this tool works best with native text PDFs. For scanned images, try our OCR tool.",
        "pdf.seo.faq.q2": "Is there a file size limit?",
        "pdf.seo.faq.a2": "No, since it processes locally, there are no arbitrary limits on file size.",

        "pdf.alert.valid_pdf": "Please upload a valid PDF file.",
        "pdf.alert.error": "Error processing PDF: ",
        "pdf.msg.more_rows": "... and {count} more rows. Download to see full data.",

        "pdf2word.alert.select": "Please select a PDF file.",
        "pdf2word.status.init": "Initializing...",
        "pdf2word.status.page": "Processing page {current} of {total}...",
        "pdf2word.status.gen": "Generating Word document...",
        "pdf2word.alert.error": "Error processing file: "
    },
    zh: {
        "nav.home": "首页",
        "meta.title": "开发者在线工具箱 - PDF转Excel, JSON格式化, 图片压缩 | AllInOne",
        "meta.desc": "免费、安全的在线开发者工具集合。支持PDF转Excel（本地处理）、JSON格式化校验、图片无损压缩。无需下载，保护隐私。",
        "meta.keywords": "PDF转Excel, JSON格式化, 在线工具, 开发者工具, 图片压缩, Base64解码",
        "nav.categories": "分类",
        "nav.about": "关于我们",

        // Sidebar Categories
        "cat.featured": "精选工具",
        "cat.format": "格式化与转换",
        "cat.media": "图片与媒体",
        "cat.doc": "文档与PDF",
        "cat.dev": "代码与安全",

        "nav.login": "登录",

        // Feedback
        "feedback.title": "发送反馈",
        "feedback.placeholder": "有什么想法？Bug？功能建议？",
        "feedback.button": "发送反馈",
        "feedback.sending": "发送中...",
        "feedback.success": "谢谢！我们已收到。",
        "feedback.error": "发送失败，请稍后重试。",

        // BgRemover

        "bgrem.tab.ai": "AI 自动",
        "bgrem.tab.manual": "魔术棒",
        "bgrem.manual.desc": "点击图片移除颜色。调整容差。",
        "bgrem.manual.tolerance": "容差",
        "common.undo": "撤销",

        // Token
        "token.img.title": "图片成本 (多模态)",
        "token.img.tokens": "图片 Token:",
        "token.img.desc": "基于 GPT-4 Vision 高分辨率计算。",
        "hero.title": "您需要的所有工具，尽在于此。",
        "hero.subtitle": "实用程序、转换器和生产力工具的分类集合。",
        "search.placeholder": "搜索工具 (例如: JSON 格式化)...",
        "search.btn": "搜索",
        "featured.title": "精选工具",
        "featured.viewAll": "查看全部",
        "tool.launch": "打开工具",

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

        // New SEO & Dynamic Keys
        "pdf.seo.h2": "如何免费将 PDF 银行对账单转换为 Excel",
        "pdf.seo.keywords_label": "相关关键词：",
        "pdf.seo.keywords": "PDF转Excel, 银行对账单, 免费在线转换",
        "pdf.seo.p1": "从 PDF 银行对账单或发票中提取表格数据可能很繁琐。我们的**免费 PDF 转 Excel 转换器**使用先进的解析技术检测表格并直接导出为 .xlsx 格式，完全在您的浏览器中完成。",
        "pdf.seo.h3_local": "为什么要在本地转换？",
        "pdf.seo.p2": "财务文件包含敏感数据。通过本地转换（客户端），您可以确保没有任何数据被发送到远程服务器，保证百分之百的隐私。",
        "pdf.seo.faq.title": "常见问题",
        "pdf.seo.faq.q1": "支持扫描的 PDF 吗？",
        "pdf.seo.faq.a1": "目前，此工具最适合原生文本 PDF。对于扫描图像，请尝试我们的 OCR 工具。",
        "pdf.seo.faq.q2": "有文件大小限制吗？",
        "pdf.seo.faq.a2": "没有，因为是在本地处理，所以没有任意的文件大小限制。",

        "pdf.alert.valid_pdf": "请上传有效的 PDF 文件。",
        "pdf.alert.error": "处理 PDF 时出错: ",
        "pdf.msg.more_rows": "... 还有 {count} 行。下载以查看完整数据。",

        "pdf2word.alert.select": "请选择一个 PDF 文件。",
        "pdf2word.status.init": "正在初始化...",
        "pdf2word.status.page": "正在处理第 {current} 页，共 {total} 页...",
        "pdf2word.status.gen": "正在生成 Word 文档...",
        "pdf2word.alert.error": "处理文件时出错: ",

        "crop.platform.instagram": "Instagram",
        "crop.platform.twitter": "Twitter / X",
        "crop.platform.youtube": "YouTube",
        "crop.faq.insta1": "正方形: 1080 x 1080 px (1:1)",
        "crop.faq.insta2": "竖屏: 1080 x 1350 px (4:5)",
        "crop.faq.insta3": "快拍 (Story): 1080 x 1920 px (9:16)",
        "crop.alert.img_only": "请上传有效的图片文件。",
        "about.values.subtitle": "以用户为中心，我们关注最重要的：速度、隐私和可访问性。",
        "about.val.free.title": "完全免费",
        "about.val.free.desc": "使用所有工具无需隐藏费用，无需信用卡或高级订阅。",
        "about.val.privacy.title": "隐私至上",
        "about.val.privacy.desc": "您的数据安全处理。文件处理后自动删除。",
        "about.val.fast.title": "快速处理",
        "about.val.fast.desc": "优化算法确您的任务在几秒钟内完成。",
        "about.team.title": "遇见团队",
        "about.contact.title": "联系我们",
        "about.contact.hint": "有疑问、反馈或发现了 Bug？请使用右下角的反馈按钮直接给我们留言。",


        // PDF Converter
        "pdf.drag.title": "将 PDF 文件拖放到此处",
        "pdf.drag.subtitle": "或点击选择文件",
        "pdf.status.processing": "正在处理 PDF...",

        // PDF to Word
        "tool.pdf2word.title": "PDF 转 Word 转换器",
        "tool.pdf2word.desc": "从 PDF 文件中提取文本并保存为 Word (.docx) 文档。本地处理。",
        "pdf2word.meta.title": "PDF 转 Word 转换器 - 免费在线 PDF 转 Docx",
        "pdf2word.meta.desc": "免费在线将 PDF 转换为 Word (Docx) 文档。在浏览器中安全提取文本。无需上传。",
        "pdf2word.meta.keywords": "PDF转Word, PDF转Docx, PDF转换器, 在线工具, 免费",
        "pdf2word.faq.title": "如何将 PDF 转换为 Word？",
        "pdf2word.faq.desc": "我们的工具从您的 PDF 文件中提取文本并创建一个新的 Microsoft Word 文档 (.docx)。快速、免费且安全。",
        "pdf2word.feat.1": "<strong>文本提取：</strong>准确提取标准 PDF 中的文本。",

        // Merge PDF
        "tool.merge.title": "合并 PDF",
        "tool.merge.desc": "将多个 PDF 文件合并为一个文档。支持拖拽排序。",
        "merge.meta.title": "合并 PDF - 免费在线合并多个 PDF 文件",
        "merge.meta.desc": "在线将多个 PDF 文件合并为一个。快速、安全且纯客户端处理。无上传限制。",
        "merge.meta.keywords": "合并PDF, PDF合并, 在线PDF工具, 免费",
        "merge.drag.title": "将 PDF 拖放到此处",
        "merge.drag.subtitle": "或点击选择文件",
        "merge.action.select_files": "选择文件",
        "merge.list.title": "已选文件",
        "merge.list.hint": "拖拽可重新排序",
        "merge.action.add_more": "添加更多",
        "merge.action.merge": "合并 PDF",
        "merge.status.processing": "正在合并...",
        "merge.status.ready": "合并完成！",
        "merge.faq.title": "如何合并 PDF 文件？",
        "merge.faq.desc": "使用我们的免费在线工具将多个 PDF 文档合并为一个文件。支持拖拽排序。",
        "merge.feat.1": "<strong>拖拽排序：</strong>轻松上传并调整文件顺序。",

        // PDF to JPG
        "tool.pdf2jpg.title": "PDF 转 JPG 转换器",
        "tool.pdf2jpg.desc": "将您的 PDF 的每一页转换为高质量的 JPG 图片。单独下载或作为 ZIP 压缩包下载。",
        "pdf2jpg.meta.title": "PDF 转 JPG 转换器 - 在线将 PDF 页面转换为图片",
        "pdf2jpg.meta.desc": "在线将 PDF 页面转换为 JPG 图片。免费、安全且高质量。以 ZIP 文件形式下载所有页面。",
        "pdf2jpg.meta.keywords": "PDF转JPG, PDF转图片, PDF转换器, 在线工具, 免费",
        "pdf2jpg.status.ready": "转换完成！",
        "pdf2jpg.download_zip": "下载 ZIP",
        "pdf2jpg.faq.title": "如何将 PDF 转换为 JPG？",
        "pdf2jpg.faq.desc": "即时将 PDF 页面转换为单独的 JPG 图片。非常适合在社交媒体上分享文档。",
        "pdf2jpg.feat.1": "<strong>高清画质：</strong>高分辨率渲染页面，清晰度无损。",

        // Image Converter
        "tool.imgconv.title": "图片格式转换",
        "tool.imgconv.desc": "即时将图片转换为 JPG, PNG 或 WebP 格式。支持批量转换。",
        "imgconv.meta.title": "图片格式转换器 - WebP转JPG, PNG转JPG等",
        "imgconv.meta.desc": "在线转换图片格式。WebP转JPG, PNG转JPG。免费、安全、纯客户端批量转换。",
        "imgconv.meta.keywords": "图片转换器, WebP转JPG, PNG转JPG, 照片转换, 在线图片工具",
        "imgconv.label.format": "转换为：",
        "imgconv.status.processing": "正在转换图片...",
        "imgconv.preview": "预览",
        "imgconv.faq.title": "图片转换器常见问题",
        "imgconv.faq.desc": "轻松将 WebP 转换为 JPG，PNG 转换为 JPG 等。我们的工具在您的浏览器中即时处理文件。",
        "imgconv.feat.1": "<strong>WebP 转 JPG：</strong>将 WebP 转换为标准 JPG 以解决兼容性问题。",
        "imgconv.feat.2": "<strong>批量处理：</strong>一次转换多张图片。",

        // Background Remover
        "tool.bgrem.title": "背景移除工具",
        "tool.bgrem.desc": "使用 AI 自动移除照片背景。100% 客户端隐私保护。",
        "bgrem.meta.title": "背景移除工具 - 在线图片去底 / 抠图",
        "bgrem.meta.desc": "自动移除图片背景。免费 AI 橡皮擦。几秒钟内获得透明背景。",
        "bgrem.meta.keywords": "背景移除, 去底, 抠图, 透明背景, 在线工具, AI抠图",
        "bgrem.status.processing": "正在移除背景... (可能需要一点时间)",
        "bgrem.note.model": "首次使用需要下载 AI 模型 (~50MB)。",
        "bgrem.result": "背景已移除",
        "bgrem.faq.title": "如何移除背景？",
        "bgrem.faq.desc": "我们的 AI 工具会自动检测主体并移除背景，生成透明 PNG 图片。",
        "bgrem.feat.1": "<strong>AI 驱动：</strong>精确的边缘检测和主体分离。",

        // QR Generator
        "tool.qr.title": "二维码生成器",
        "tool.qr.desc": "创建自定义二维码，用于网址、文本、联系人信息等。",
        "qr.meta.title": "二维码生成器 - 在线制作自定义二维码",
        "qr.meta.desc": "免费在线二维码生成器。为网址、文本、Wi-Fi等制作二维码。下载高清 PNG 图片。",
        "qr.meta.keywords": "二维码生成器, 制作二维码, 在线生成二维码, 免费工具",
        "qr.label.text": "内容",
        "qr.placeholder.text": "在此输入文本或网址...",
        "qr.label.size": "尺寸 (px)",
        "qr.label.color": "颜色",
        "qr.action.generate": "生成二维码",
        "qr.preview.placeholder": "二维码将显示在这里",
        "qr.faq.title": "二维码生成器常见问题",
        "qr.faq.desc": "即时创建静态二维码。它们永不过期，永久有效。",
        "qr.feat.1": "<strong>可定制：</strong>调整尺寸和颜色。",
        "qr.feat.2": "<strong>静态码：</strong>数据直接嵌入图片中。",

        // UUID Generator
        "tool.uuid.title": "UUID 生成器",
        "tool.uuid.desc": "即时生成随机的 UUID (通用唯一标识符)，第4版。",
        "uuid.meta.title": "UUID/GUID 生成器 - 批量生成随机 UUID",
        "uuid.meta.desc": "在线生成适用于数据库和唯一标识符的随机 UUID (v4)。即时批量生成。",
        "uuid.meta.keywords": "uuid生成器, guid生成器, 随机uuid, 唯一标识符, uuid v4",
        "uuid.settings": "设置",
        "uuid.label.quantity": "数量",
        "uuid.label.hyphens": "连字符 (-)",
        "uuid.label.uppercase": "大写",
        "uuid.action.generate": "生成 UUID",
        "uuid.faq.title": "UUID 生成器常见问题",
        "uuid.faq.desc": "生成符合 RFC4122 标准的 Version 4 UUID。适用于数据库键、软件测试和唯一标识符。",
        "uuid.feat.1": "<strong>批量生成：</strong>一次最多生成 1000 个 UUID。",
        "uuid.feat.2": "<strong>可定制：</strong>支持大写或移除连字符。",

        // Password Generator
        "tool.pwd.title": "密码生成器",
        "tool.pwd.desc": "生成强大、安全的密码以保护您的账户。本地生成，绝不存储。",
        "pwd.meta.title": "密码生成器 - 生成强密码",
        "pwd.meta.desc": "在线生成强大、安全、随机的密码。可自定义长度和字符。100% 客户端安全。",
        "pwd.meta.keywords": "密码生成器, 随机密码, 强密码, 在线工具, 安全密码",
        "pwd.label.length": "长度",
        "pwd.opt.uppercase": "大写字母 (A-Z)",
        "pwd.opt.lowercase": "小写字母 (a-z)",
        "pwd.opt.numbers": "数字 (0-9)",
        "pwd.opt.symbols": "符号 (!@#$)",
        "pwd.faq.title": "密码生成器常见问题",
        "pwd.faq.desc": "创建安全密码以保护您的在线账户。我们的工具在您的浏览器中本地运行。",
        "pwd.feat.1": "<strong>安全：</strong>本地生成，绝不传输。",
        "pwd.feat.2": "<strong>可定制：：</strong>选择长度和字符类型。",

        // Diff Checker
        "tool.diff.title": "文本对比工具",
        "tool.diff.desc": "对比两段文本或文件，标记差异之处。",
        "diff.meta.title": "文本对比/Diff工具 - 在线比较文本差异",
        "diff.meta.desc": "在线对比两段文本或文件的差异。即时高亮显示新增、删除和修改的内容。",
        "diff.meta.keywords": "Diff工具, 文本对比, 找不同, 代码对比, 在线工具",
        "diff.type.chars": "字符",
        "diff.type.words": "单词",
        "diff.type.lines": "行",
        "diff.label.original": "原始文本",
        "diff.label.changed": "新文本",
        "diff.action.compare": "查找差异",
        "diff.faq.title": "文本对比工具常见问题",
        "diff.faq.desc": "快速找出两段文本之间的区别。支持按字符、单词或行进行比较。",
        "diff.feat.1": "<strong>可视化差异：</strong>清晰标记增加（绿色）和删除（红色）的内容。",
        "diff.feat.2": "<strong>多种模式：</strong>支持字符、单词或是行级对比。",
        "diff.action.upload": "上传文件",

        // OCR
        "tool.ocr.title": "图片转文字 (OCR)",
        "tool.ocr.desc": "使用 AI 将图片转换为文本。100% 浏览器本地运行。",
        "ocr.meta.title": "免费在线 OCR - 图片转文字/提取文本",
        "ocr.meta.desc": "免费在线将图片转换为文本。支持中文、英文等多语言。纯客户端处理，保护隐私。",
        "ocr.meta.keywords": "在线OCR, 图片转文字, 提取图片文字, 免费OCR, tesseract.js",
        "ocr.drag.title": "将图片拖放到此处",
        "ocr.drag.subtitle": "或点击选择文件",
        "ocr.settings": "设置",
        "ocr.lang": "语言",
        "ocr.preview": "图片预览",
        "pdf.ocr.title": "OCR PDF 扫描",
        "pdf.ocr.desc": "从扫描的 PDF 文件中提取文本。",

        // PDF Tools SEO
        "pdf2word.seo.h2": "免费在线 PDF 转 Word 转换器",
        "pdf2word.seo.p1": "将 PDF 文件转换为可编辑的 Word 文档 (.docx)。快速、免费且安全。",
        "pdf2jpg.seo.h2": "免费在线 PDF 转 JPG 转换器",
        "pdf2jpg.seo.p1": "将 PDF 页面转换为高质量的 JPG 图像。支持单个下载或打包下载。",
        "ocr.faq.title": "OCR 工具常见问题",
        "ocr.faq.desc": "自动从图片中提取文本。我们的 OCR 工具使用先进的机器学习技术识别照片中的文字。",
        "ocr.feat.1": "<strong>多语言支持：：</strong>支持中文、英文等多种语言。",
        "ocr.feat.2": "<strong>隐私至上：：</strong>所有处理都在您的浏览器中完成。无需上传图片。",
        "ocr.feat.3": "<strong>完全免费：：</strong>无限制使用。",

        // EXIF Viewer
        "tool.exif.title": "EXIF 查看器",
        "tool.exif.desc": "查看图片中隐藏的元数据。相机型号、参数、GPS 位置等。",
        "exif.meta.title": "EXIF 查看器 - 在线查看图片元数据",
        "exif.meta.desc": "即时查看照片中隐藏的 EXIF 元数据。检查 ISO、快门速度、GPS 位置和相机型号。100% 客户端隐私保护。",
        "exif.meta.keywords": "EXIF查看器, 图片元数据, 查看详情, 检查照片位置, 在线工具",
        "exif.drag.title": "将图片拖放到此处",
        "exif.drag.subtitle": "或点击选择文件",
        "exif.warn.gps.title": "发现位置数据",
        "exif.warn.gps.desc": "此图片包含 GPS 坐标。公开分享时请小心。",
        "exif.data.title": "图片元数据",
        "exif.data.empty": "上传图片以查看其 EXIF 数据。",
        "exif.faq.title": "EXIF 查看器常见问题",
        "exif.faq.desc": "EXIF (可交换图像文件格式) 数据包含有关照片拍摄方式的信息。",
        "exif.feat.1": "<strong>相机详情：</strong>制造商、型号、镜头信息。",
        "exif.feat.2": "<strong>拍摄设置：</strong>快门速度、光圈、ISO、焦距。",
        "exif.feat.3": "<strong>GPS信息：</strong>纬度、经度、海拔（如果启用）。",

        // JSON <-> YAML
        "tool.yaml.title": "JSON <> YAML 转换器",
        "tool.yaml.desc": "即时在 JSON 和 YAML 格式之间进行转换。",
        "yaml.meta.title": "JSON 转 YAML / YAML 转 JSON - 在线双向转换器",
        "yaml.meta.desc": "即时将 JSON 转换为 YAML，或将 YAML 转换为 JSON。开发者和运维人员的免费在线转换器。",
        "yaml.meta.keywords": "json转yaml, yaml转json, json转换器, 在线工具, 格式互转",
        "yaml.auto": "转换在您输入时自动进行。",
        "yaml.faq.title": "JSON & YAML 转换器常见问题",
        "yaml.faq.desc": "轻松在 JSON 和 YAML 格式之间切换。Kubernetes 配置和 API 开发的必备工具。",
        "yaml.feat.1": "<strong>双向转换：</strong>在任一框中输入即可转换。",
        "yaml.feat.2": "<strong>实时：</strong>即时转换，无需点击按钮。",
        "yaml.feat.3": "<strong>校验：</strong>错误提示帮助您修复语法问题。",

        // Token Counter
        "tool.token.title": "LLM Token 计数器",
        "tool.token.desc": "计算 GPT-4, Claude 等模型的 Token 数量及预估费用。",
        "token.meta.title": "LLM Token 计数器 - GPT-4/Claude 费用计算",
        "token.meta.desc": "在线计算 Prompt 的 Token 数量。支持 GPT-3.5, GPT-4, Claude。即时预估 API 成本。",
        "token.meta.keywords": "token计算器, gpt token数量, llm成本计算, claude tokenizer",
        "token.cost.title": "预估成本 (输入 + 输出)",
        "token.label.count": "Token 总数 (输入+输出)",
        "token.label.input": "输入文本 (Prompt)",
        "token.label.output": "预估输出 Token (Completion)",
        "token.label.chars": "字符数:",
        "token.faq.title": "Token 计数器常见问题",
        "token.faq.desc": "在使用 ChatGPT 和 Claude 等大语言模型 (LLM) 时，了解 Token 用量对于成本管理至关重要。",
        "token.feat.1": "<strong>不只是单词：</strong>1000 个 Token 大约等于 750 个单词（英文）或 500 个汉字。",
        "token.feat.2": "<strong>分词器：</strong>我们使用 GPT-4 标准的 `cl100k_base` 编码逻辑进行估算。",

        // Word Counter
        "tool.word.title": "字数统计",
        "tool.word.desc": "统计单词、字符、句子和段落。预估阅读时间。",
        "word.meta.title": "在线字数统计 - 计算字符数、阅读时间",
        "word.meta.desc": "免费在线字数统计工具。计算字符、单词、句子和段落数量。预估文章阅读时间。",
        "word.meta.keywords": "字数统计, 字符计数, 在线查字数, 阅读时间计算, 写作工具",
        "word.stat.words": "字词数",
        "word.stat.chars": "字符数",
        "word.stat.sentences": "句子数",
        "word.stat.paragraphs": "段落数",
        "word.read.time": "阅读时间：",
        "word.speak.time": "朗读时间：",
        "word.faq.title": "字数统计常见问题",
        "word.faq.desc": "一个简单实用的工具，帮助作家、学生和专业人士追踪文本统计数据。",
        "word.feat.1": "<strong>阅读时间：</strong>基于平均阅读速度（每分钟 200 字）计算。",
        "word.feat.2": "<strong>朗读时间：</strong>基于平均朗读速度（每分钟 130 字）计算。",

        // SVG Sandbox
        "tool.svg.title": "SVG 沙盒",
        "tool.svg.desc": "实时编写、编辑和预览 SVG 图形代码。",
        "svg.meta.title": "SVG 沙盒 - 在线 SVG 编辑与预览",
        "svg.meta.desc": "实时编辑和预览 SVG 代码。一个用于测试和微调可缩放矢量图形 (SVG) 的简单游乐场。",
        "svg.meta.keywords": "svg编辑器, svg沙盒, svg预览, svg在线工具, 矢量图编辑",
        "svg.faq.title": "SVG 沙盒常见问题",
        "svg.faq.desc": "可缩放矢量图形 (SVG) 是一种基于 XML 的二维图形矢量图像格式。",
        "svg.feat.1": "<strong>实时预览：</strong>输入代码时立即查看更改。",
        "svg.feat.2": "<strong>透明网格：</strong>在透明背景上检查您的图形。",
        "svg.feat.3": "<strong>下载：</strong>将您的作品保存为 .svg 文件。",

        // URL to Markdown
        "tool.md.title": "网页转 Markdown",
        "tool.md.desc": "提取网页正文并转换为 AI 友好的 Markdown 格式。",
        "md.meta.title": "网页转 Markdown - 提取内容给 AI 阅读",
        "md.meta.desc": "将任何网页转换为干净的 Markdown 格式，供 ChatGPT 和 Claude 使用。提取正文，去除广告和杂乱内容。",
        "md.meta.keywords": "url转markdown, 网页抓取, 正文提取, html转markdown, ai提示词工具",
        "md.label.html": "在此粘贴 HTML 源代码：",
        "md.label.result": "Markdown 结果",
        "md.tip": "提示：在目标网页右键 -> '查看网页源代码' -> 全选复制 -> 粘贴到此处。这样最准确。",
        "md.action.convert": "转换为 Markdown",
        "md.faq.title": "网页转 Markdown 常见问题",
        "md.faq.desc": "为什么使用 Markdown？它是大语言模型最干净的文本格式。直接将 HTML 粘贴到 ChatGPT 中通常会混入脚本和样式，导致混乱。",
        "md.feat.1": "<strong>正文提取：</strong>我们使用 Mozilla Readability 引擎智能识别并提取文章正文。",
        "md.feat.2": "<strong>Turndown：</strong>将清洗后的 HTML 转换为标准的 Markdown 格式。",
        "md.feat.3": "<strong>隐私保护：</strong>转换完全在您的浏览器中进行，不会上传数据。",
        "md.input.paste": "粘贴 HTML 源码",
        "md.input.url": "从 URL 获取",
        "md.label.url": "输入 URL:",
        "md.placeholder.url": "https://example.com/article",
        "md.cors.note": "注意：使用公共 CORS 代理。某些网站可能会阻止。",

        // Text to Speech
        "tool.tts.title": "在线文字转语音",
        "tool.tts.desc": "使用浏览器内置语音，将文本转换为逼真的语音。",
        "tts.meta.title": "在线文字转语音 (TTS) - 免费朗读助手",
        "tts.meta.desc": "即时将文本转换为语音。免费、无限量、本地运行，使用您浏览器内置的高质量语音。",
        "tts.meta.keywords": "文字转语音, 在线TTS, 朗读工具, 语音合成, 免费TTS",
        "tts.label.voice": "选择语音",
        "tts.label.rate": "语速",
        "tts.label.pitch": "语调",
        "tts.loading.voices": "加载语音中...",
        "tts.tip": "提示：不同的浏览器（Chrome, Safari, Edge）提供不同的语音库。简单句子的效果通常更好。",
        "tts.faq.title": "文字转语音常见问题",
        "tts.faq.desc": "基于浏览器的语音合成技术，无需安装任何软件即可朗读文字内容。",
        "tts.feat.1": "<strong>免费无限：</strong>没有字符数限制，也不需要订阅。",
        "tts.feat.2": "<strong>隐私安全：</strong>语音合成在本地设备上进行。",
        "tts.feat.3": "<strong>多语言支持：</strong>直接访问您操作系统提供的所有语音。",

        // Key Code Viewer
        "tool.key.title": "键值测试器",
        "tool.key.desc": "按下任意键，获取 JavaScript 键盘事件代码。",
        "key.meta.title": "键盘键值测试 (Key Code Viewer) - JS Event Code 查询",
        "key.meta.desc": "按任意键即可获取 JavaScript event.key, event.code 和 keycode。前端开发者的必备工具。",
        "key.meta.keywords": "键盘测试, 键值查询, js keycode, event code viewer",
        "key.msg.press": "请按下键盘上的任意键",
        "key.faq.title": "常见问题 (FAQ)",
        "key.faq.key.q": "什么是 event.key?",
        "key.faq.key.a": "表示按下的键的值，会考虑修饰键（如Shift）和键盘布局。",
        "key.faq.code.q": "什么是 event.code?",
        "key.faq.code.a": "表示键盘上的物理按键位置。它不受键盘语言布局影响。",
        "key.faq.which.q": "为什么 event.which 被弃用?",
        "key.faq.which.a": "它是非标准的并且在不同浏览器中表现不一致。请使用 key 或 code。",

        // Social Image Cropper
        "tool.crop.title": "社媒图片裁剪",
        "tool.crop.desc": "为 Instagram, Twitter (X), YouTube 完美裁剪图片尺寸。",
        "crop.meta.title": "社媒图片裁剪神器 - 自动适配 Ins/Twitter/YT 尺寸",
        "crop.meta.desc": "即时裁剪和调整社交媒体图片大小。内置 Instagram、Twitter/X、YouTube 封面等常用预设尺寸。",
        "crop.meta.keywords": "图片裁剪, 社媒图片尺寸, instagram裁剪, twitter封面生成, youtube缩略图",
        "crop.label.presets": "尺寸预设",
        "crop.action.new": "上传新图片",
        "crop.faq.title": "图片裁剪常见问题",
        "crop.faq.desc": "使用正确的图片尺寸是提高社交媒体互动率的关键。",
        "crop.size.title": "常用社交媒体尺寸参考 (2025)",

        // User Agent Info
        "tool.ua.title": "我的 User Agent 是什么？",
        "tool.ua.desc": "即时查看您的浏览器、操作系统和系统信息。",
        "ua.meta.title": "User Agent 查询工具 - 浏览器信息检测",
        "ua.meta.desc": "即时查看您的 User Agent 字符串、浏览器版本、操作系统和屏幕分辨率。",
        "ua.meta.keywords": "user agent查询, 浏览器ua, 屏幕分辨率, 我的ip, 系统信息检测",
        "ua.label.ua": "您的 User Agent 字符串",
        "ua.label.browser": "浏览器",
        "ua.label.os": "操作系统",
        "ua.label.screen": "屏幕分辨率",
        "ua.label.ip": "IP 地址",
        "ua.faq.title": "User Agent 常见问题",
        "ua.faq.desc": "User Agent 是您的浏览器发送给网站的一串文本，用于标识自身身份。",
        "ua.feat.1": "<strong>故障排除：</strong>技术支持团队通常需要它来诊断问题。",
        "ua.feat.2": "<strong>内容分发：</strong>网站使用它来提供移动版或桌面版。",
        "ua.feat.3": "<strong>分析统计：</strong>帮助网站管理员了解受众的设备情况。",

        // Video Editor
        "tool.video.title": "浏览器本地视频剪辑",


        // Secure Encryption
        "tool.crypto.title": "安全文件加密",
        "tool.crypto.desc": "使用银行级 AES-GCM 技术在本地加密和解密文件。您的数据从未离开您的设备。",
        "crypto.meta.title": "在线文件加密 - 银行级 AES-GCM",
        "crypto.meta.desc": "使用 AES-GCM 256位加密技术，在浏览器中安全地加密文件和文本。没有任何数据发送到服务器。",
        "crypto.meta.keywords": "文件加密, 在线加密, aes-gcm, 浏览器端加密, 安全文件传输",
        "crypto.label.encrypt": "加密",
        "crypto.msg.drop_enc": "拖放文件到此处进行加密",
        "crypto.label.pass": "密码",
        "crypto.action.encrypt": "加密文件",
        "crypto.msg.enc_success": "加密成功！",
        "crypto.label.decrypt": "解密",
        "crypto.msg.drop_dec": "拖放 .enc 文件到此处进行解密",
        "crypto.action.decrypt": "解密文件",
        "crypto.msg.dec_success": "解密成功！",
        "crypto.faq.title": "安全加密常见问题",
        "crypto.faq.desc": "我们使用浏览器内置的 Web Crypto API 进行军用级 AES-GCM 加密，无需将数据发送到服务器。",
        "crypto.feat.1": "<strong>PBKDF2：</strong>您的密码经过加盐和 100,000 次哈希运算，生成安全的加密密钥。",
        "crypto.feat.2": "<strong>AES-GCM：</strong>我们使用认证加密 (AES-GCM 256位) 确保机密性和完整性。",
        "crypto.feat.3": "<strong>仅客户端：</strong>因为它在您的浏览器中运行，即使是我们也无法查看您的文件或密码。",

        // CORS Tester
        "tool.cors.title": "CORS 跨域请求测试",
        "tool.cors.desc": "调试跨域策略很难。此工具让您可以通过浏览器直接测试 API，轻松排查问题。",
        "cors.meta.title": "在线 CORS 测试工具 - 调试跨域请求",
        "cors.meta.desc": "通过浏览器发送真实的 Fetch 请求来调试 CORS（跨域资源共享）问题。分析响应头和状态码。",
        "cors.meta.keywords": "cors测试, 跨域调试, 在线api测试, fetch测试工具, 跨域资源共享",
        "cors.label.req": "请求详情",
        "cors.action.send": "发送请求",
        "cors.label.examples": "测试示例",
        "cors.label.response": "响应结果",
        "cors.msg.waiting": "等待请求...",
        "cors.err.desc": "浏览器拦截了此请求。这通常意味着服务器缺少 Access-Control-Allow-Origin 响应头。",
        "cors.faq.title": "CORS 测试常见问题",
        "cors.faq.desc": "CORS（跨域资源共享）是一种安全机制，用于控制一个域下的网页能否请求另一个域的资源。",

        // SQL Formatter
        "tool.sql.title": "SQL 格式化",
        "tool.sql.desc": "美化和格式化您的 SQL 查询，提高可读性。支持多种方言。",
        "sql.meta.title": "SQL 格式化工具 - 在线美化 SQL 代码",
        "sql.meta.desc": "在线格式化和美化 SQL 查询。支持 MySQL, PostgreSQL, SQL Server 等。免费且客户端处理。",
        "sql.meta.keywords": "SQL格式化, SQL美化, 格式化SQL, 在线SQL工具, 代码美化",
        "sql.label.input": "输入 SQL",
        "sql.label.dialect": "方言：",
        "sql.action.format": "格式化代码",
        "sql.faq.title": "SQL 格式化工具常见问题",
        "sql.faq.desc": "整理和美化您的 SQL 查询。使复杂的查询易于阅读。",
        "sql.feat.1": "<strong>多方言支持：</strong>支持 MySQL, PostgreSQL, SQL Server 等。",
        "sql.feat.2": "<strong>可定制：</strong>调整缩进（默认为2个空格）。",

        // Common
        "common.features": "功能",
        "common.client_side": "纯客户端",
        "common.free": "免费",
        "common.download": "下载",
        "common.reset": "转换另一个",
        "common.new": "最新",
        "common.popular": "热门",
        "common.open": "打开",
        "common.copied": "已复制",
        "common.copy_failed": "复制失败",

        // About Page
        "about.explore": "浏览工具",
        "about.story": "阅读我们的故事",
        "about.team.role.lead": "首席开发",
        "about.team.role.design": "UI/UX 设计师",
        "about.team.role.backend": "后端工程师",
        "about.form.option.general": "一般咨询",
        "about.form.option.bug": "错误报告",
        "about.form.option.feature": "功能请求",

        // Tool JS Messages
        "base64.error.fail": "编码失败，请检查输入。",
        "base64.error.decode": "解码失败：无效的 Base64 字符串。",

        "img.opt.jpeg": "JPEG (推荐)",
        "img.opt.png": "PNG (无损/透明)",
        "img.opt.webp": "WebP (现代)",
        "img.stat.reduction": "压缩率",
        "img.action.download_image": "下载图片",

        "json.error.invalid": "无效的 JSON: ",
        "json.success.copied": "已复制",

        "ts.action.pause": "暂停更新",
        "ts.action.resume": "恢复更新",
        "ts.success.copied": "已复制：",

        "md.success.copied": "已复制！",
        "md.init.text": "# 欢迎！\\n\\n这是一个简单的 **Markdown 编辑器**。\\n\\n- 实时预览\\n- 界面简洁\\n- 纯客户端处理\\n\\n`console.log('你好，世界');`\\n",

        "pdf.status.ready": "准备下载",
        "pdf.status.error": "处理文件出错",
        "pdf.preview.title": "预览提取的数据",
        "pdf.action.select_file": "选择文件",
        "pdf.action.download_excel": "下载 Excel (.xlsx)",
        "pdf.action.download_csv": "下载 CSV",
        "pdf.note.privacy": "🔒 本地处理。您的数据从未离开此浏览器。",
        "pdf.password.title": "需要密码",
        "pdf.password.desc": "此 PDF 已加密。请输入密码以继续。",
        "pdf.password.placeholder": "请输入密码",
        "pdf.password.incorrect": "密码错误，请重试。",
        "pdf.error.no_text": "未找到文本。此文档可能是扫描件（图片）。请尝试使用 OCR 工具。",
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
        "terms.p3": "allinone.page 网站上的材料按“原样”提供。allinone.page 不作任何明示或暗示的保证，特此声明并否认所有其他保证，包括但不限于适销性、特定用途适用性或不侵犯知识产权或其他侵犯权利的暗示保证或条件。",

        // Meta - PDF
        "pdf.meta.title": "银行流水转Excel - 免费在线PDF转表格工具 (安全·本地)",
        "pdf.meta.desc": "浏览器本地将PDF银行流水转换为Excel (.xlsx)。保护隐私：无文件上传，100%客户端处理。支持各大银行。",
        "pdf.meta.keywords": "PDF转Excel, 银行流水转换, PDF转表格, 在线工具, 本地处理, 数据隐私",

        // Meta - JSON
        "json.meta.title": "JSON格式化校验工具 - 在线美化/压缩 | AllInOne",
        "json.meta.desc": "免费在线JSON格式化工具。支持语法验证、美化（Beautify）和压缩（Minify）。提供清晰的语法高亮和错误检测。安全本地处理。",
        "json.meta.keywords": "JSON格式化, JSON验证, JSON美化, JSON压缩, 在线JSON工具, 开发者工具",

        // Meta - Image
        "img.meta.title": "在线图片压缩 - 压缩PNG/JPG/WebP无损画质 | AllInOne",
        "img.meta.desc": "在线压缩图片而不损失画质。支持JPG, PNG, WebP。本地压缩，无上传，保护隐私。支持批量处理。",
        "img.meta.keywords": "图片压缩, 在线压缩图片, 压缩PNG, 压缩JPG, 图片瘦身, 无损压缩",

        // Meta - Base64
        "base64.meta.title": "Base64编码/解码工具 - 在线字符串转换 | AllInOne",
        "base64.meta.desc": "快速Base64编码和解码工具。将文本转换为Base64或将Base64解码为可读文本。开发者友好，安全处理长字符串。",
        "base64.meta.keywords": "Base64编码, Base64解码, Base64在线转换, 文本转Base64, 开发者工具",

        // Meta - Markdown
        "md.meta.title": "Markdown编辑器 - 在线预览 & HTML导出 | AllInOne",
        "md.meta.desc": "支持实时预览的在线Markdown编辑器。所见即所得，一键导出HTML。支持分屏查看及本地自动保存。",
        "md.meta.keywords": "Markdown编辑器, 在线Markdown, Markdown转HTML, 实时预览, 写作工具",

        // Meta - Timestamp
        "ts.meta.title": "Unix时间戳转换 - Epoch时间/日期互转",
        "ts.meta.desc": "在线将Unix时间戳转换为可读日期，或将日期转换为时间戳。支持秒和毫秒。显示实时当前Epoch时间。",
        "ts.meta.keywords": "Unix时间戳, 时间戳转换, Epoch时间, 时间戳转日期, 日期转时间戳",

        // Specific Tool Headers (Missing in previous pass)
        "aicost.title.estimated": "每次请求预估成本",
        "aicost.title.understanding": "了解 LLM API 定价",
        "aicost.title.tokens": "输入 vs 输出 Tokens",
        "aicost.faq.title": "常见问题",

        // Background Remover
        "bgrem.seo.keywords_label": "相关关键词：",
        "bgrem.seo.keywords": "背景移除, AI抠图, 免费在线工具",
        "bgrem.seo.faq.title": "常见问题",

        // Base64
        "base64.seo.keywords_label": "相关关键词：",
        "base64.seo.keywords": "Base64编码, Base64解码, 在线转换工具",

        // Diff Checker
        "diff.seo.keywords_label": "相关关键词：",
        "diff.seo.keywords": "文本对比, 代码Diff, 在线找不同",
        "diff.seo.h2": "在线文本差异检查器",

        // Image Compressor
        "img.seo.keywords_label": "相关关键词：",
        "img.seo.keywords": "图片压缩, 图像瘦身, 无损压缩",
        "img.seo.faq.title": "常见问题",
        "img.seo.h2_compress": "这想保持画质的同时压缩图片",
        "img.seo.h2_faq": "常见问题",

        // Image Prompt Gen
        "imgprompt.seo.h2": "掌握 Midjourney 提示词",

        // JSON
        "json.seo.keywords_label": "相关关键词：",
        "json.seo.keywords": "JSON格式化, JSON校验, JSON美化",
        "json.seo.h2": "最佳免费在线 JSON 校验和美化工具",

        // Local LLM
        "local.seo.h2": "使用 WebGPU 在本地运行 LLM",

        // Markdown
        "md.seo.keywords_label": "相关关键词：",
        "md.seo.keywords": "Markdown编辑器, 在线预览, 写作工具",
        "md.seo.h2": "带实时预览的在线 Markdown 编辑器",
        "md.seo.p1": "使用我们的分屏 Markdown 编辑器编写文档、自述文件或博客文章。直接导出为 HTML 或 .md 文件。",

        // Model Arena
        "arena.seo.h2": "为您的任务选择合适的 LLM",

        // Password
        "pwd.seo.keywords_label": "相关关键词：",
        "pwd.seo.keywords": "密码生成器, 强密码, 安全工具",
        "pwd.seo.h2": "安全随机密码生成器",
        "pwd.seo.p1": "直接在浏览器中生成加密级强度的密码。自定义长度和字符集，确保符合任何安全策略。",

        // Prompt Builder
        "prompt.seo.faq.title": "常见问题",
        "prompt.seo.h2": "如何编写更好的 AI 提示词",
        "prompt.seo.h2_faq": "常见问题",
        "prompt.seo.p1": "编写有效的提示词是获得 Claude 3.5 Sonnet 和 ChatGPT 等 LLM 最佳结果的关键。此工具帮助您使用行业最佳实践构建提示词。",
        "prompt.seo.h3_xml": "结构化提示词 (XML)",
        "prompt.seo.p_xml": "Anthropic 建议使用 XML 标签清晰地分隔提示词的不同部分。这有助于模型区分指令、上下文和输入数据。",
        "prompt.seo.h3_role": "角色与上下文",
        "prompt.seo.p_role": "始终指定一个角色（例如，“你是一位 Python 专家”）并提供足够的背景信息。这能让模型的回答更具针对性。",
        "prompt.faq.q1": "Claude XML 和 ChatGPT Markdown 有什么区别？",
        "prompt.faq.a1": "Claude 使用显式的 XML 标签（如 &lt;context&gt;）效果更好，而 ChatGPT 通常更喜欢标准的 Markdown 标题（# Context）。",
        "prompt.faq.q2": "这个提示词构建器是免费的吗？",
        "prompt.faq.a2": "是的，此工具 100% 免费且完全在浏览器中运行。您的数据不会发送到我们的服务器。",

        // QR
        "qr.seo.keywords_label": "相关关键词：",
        "qr.seo.keywords": "二维码生成器, 在线二维码, 免费工具",
        "qr.seo.h2": "免费自定义二维码生成器",

        // UUID
        "uuid.seo.title": "批量 UUID/GUID 生成器",
        "uuid.seo.desc": "即时生成版本 4 UUID（通用唯一标识符）。非常适合数据库主键和测试。",
        "uuid.seo.keywords_label": "相关关键词：",
        "uuid.seo.keywords": "UUID生成器, GUID生成器, 随机ID",
        "ts.meta.title": "Unix时间戳转换 - 时间戳转日期/日期转时间戳 | AllInOne",
        "ts.meta.desc": "在线Unix时间戳转换工具。支持时间戳与北京时间/UTC时间互转。精确到秒和毫秒。实时显示当前时间戳。",
        "ts.meta.keywords": "时间戳转换, Unix时间戳, 时间戳转日期, 日期转时间戳, Unix Time, 在线工具",

        // Meta - Pages
        "about.meta.title": "关于我们 - AllInOne 开发者工具箱",
        "about.meta.desc": "了解更多关于AllInOne.page的信息。我们致力于构建免费、隐私优先、完全在浏览器中运行的开发者工具。",
        "about.meta.keywords": "关于AllInOne, 开发者工具团队, 隐私保护, 客户端工具",

        "privacy.meta.title": "隐私政策 - AllInOne",
        "privacy.meta.desc": "我们的隐私承诺：零数据收集。所有工具均在客户端运行。阅读我们完整的隐私政策。",
        "privacy.meta.keywords": "隐私政策, 无数据收集, 安全工具, 数据隐私",

        "terms.meta.title": "服务条款 - AllInOne",
        "terms.meta.desc": "AllInOne.page 开发者工具箱的使用条款和条件。",
        "terms.meta.keywords": "服务条款, 使用协议, 免责声明",

        // New Tool Keys (OCR)
        "ocr.lang": "语言",
        "ocr.status.processing": "正在识别图片...",
        "ocr.status.error": "识别过程中出错",

        // SQL
        "sql.label.keywordCase": "关键字大小写",
        "sql.label.indent": "缩进风格",
        "sql.opt.preserve": "保持原样",
        "sql.opt.upper": "大写",
        "sql.opt.lower": "小写",
        "sql.opt.space2": "2个空格",
        "sql.opt.space4": "4个空格",
        "sql.opt.tab": "制表符 (Tab)",

        // Cropper
        "crop.label.bg": "背景颜色",
        "crop.bg.desc": "当图片适应尺寸时填充透明区域",

        // QR
        "qr.tab.generate": "生成二维码",
        "qr.tab.scan": "扫描 / 解码",
        "qr.scan.upload": "上传二维码图片",
        "qr.scan.result": "解码结果",

        // YAML
        "yaml.style.label": "输出风格",
        "yaml.style.block": "块级 (默认)",
        "yaml.style.flow": "流式 (类 JSON)",
        "yaml.seo.h2": "最佳 JSON / YAML 在线转换器",
        "yaml.seo.keywords_label": "相关关键词：",
        "yaml.seo.keywords": "json转yaml, yaml转json, json转换器, 开发者工具",

        // AI Lab
        "cat.ai": "AI 实验室",
        "tool.prompt.title": "Prompt 提示词构建器",
        "tool.prompt.desc": "为 Claude 和 ChatGPT 构建结构化提示词。",
        "tool.aicost.title": "AI 成本估算器",
        "tool.aicost.desc": "计算不同模型的 API 成本（OpenAI, Anthropic 等）。",
        "tool.imgprompt.title": "绘图提示词生成器",
        "tool.imgprompt.desc": "生成 Midjourney 和 Flux 的风格提示词。",
        "tool.arena.title": "模型竞技场",
        "tool.arena.desc": "比较 LLM 的能力和价格。",
        "tool.local.title": "本地 LLM 运行器",
        "tool.local.desc": "在浏览器中私密运行 AI 模型（WebGPU）。"
    },
    es: {
        "nav.home": "Inicio",
        "nav.categories": "Categorías",
        "nav.about": "Sobre Nosotros",
        "cat.featured": "Destacados",
        "cat.ai": "Laboratorio IA",
        "cat.format": "Formato y Conversión",
        "cat.media": "Imágenes y Medios",
        "cat.doc": "Documentos y PDF",
        "cat.dev": "Código y Seguridad",
        "footer.rights": "© 2026 allinone.page. Todos los derechos reservados.",
        "footer.privacy": "Política de Privacidad",
        "footer.terms": "Términos de Servicio",
        "footer.contact": "Contacto",
        "tool.launch": "Abrir Herramienta",
        "meta.title": "Directorio de Herramientas para Desarrolladores - PDF a Excel, JSON, Imágenes",
        "meta.desc": "Herramientas gratuitas para desarrolladores: convertidor PDF a Excel, formateador JSON, compresor de imágenes. Procesamiento seguro en el cliente.",
        "tool.pdf.title": "Conversor PDF a Excel",
        "tool.pdf.desc": "Convierte estados de cuenta PDF a Excel. 100% privado.",
        "tool.json.title": "Formateador JSON",
        "tool.json.desc": "Embellece y valida JSON instantáneamente.",
        "tool.prompt.title": "Constructor de Prompts",
        "tool.aicost.title": "Estimador de Costos IA",
        "tool.imgprompt.title": "Generador de Prompts de Imagen",
        "tool.arena.title": "Arena de Modelos IA",
        "tool.local.title": "Ejecutar LLM Local",
        "feedback.title": "Enviar Comentarios",
        "feedback.placeholder": "¿Qué tienes en mente? ¿Error? ¿Sugerencia?",
        "feedback.button": "Enviar",
        "nav.login": "Iniciar Sesión",
        "hero.title": "Todas las herramientas que necesitas, en una página.",
        "hero.subtitle": "Una colección categorizada de utilidades para desarrolladores, convertidores y herramientas de productividad.",
        "search.placeholder": "Buscar una herramienta (ej. Formateador JSON)...",
        "search.btn": "Buscar",

        // New SEO & Tools
        "aicost.title.estimated": "Costo Estimado por Colecitud",
        "aicost.title.understanding": "Entendiendo los Precios de API LLM",
        "aicost.title.tokens": "Tokens de Entrada vs Salida",
        "aicost.faq.title": "Preguntas Frecuentes",

        "bgrem.seo.keywords_label": "Palabras clave:",
        "bgrem.seo.keywords": "eliminar fondo, borrar fondo ai, herramienta online gratis",
        "bgrem.seo.faq.title": "Preguntas Frecuentes",

        "base64.seo.keywords_label": "Palabras clave:",
        "base64.seo.keywords": "codificador base64, decodificador base64, convertidor online",

        "diff.seo.keywords_label": "Palabras clave:",
        "diff.seo.keywords": "diferencia de texto, diff código, comparar texto online",
        "diff.seo.h2": "Verificador de Diferencias de Texto Online",

        "img.seo.keywords_label": "Palabras clave:",
        "img.seo.keywords": "compresor de imagen, reducir tamaño imagen, compresión sin pérdida",
        "img.seo.faq.title": "Preguntas Frecuentes",
        "img.seo.h2_compress": "Comprimir Imágenes Online Sin Perder Calidad",
        "img.seo.h2_faq": "Preguntas Frecuentes",

        "imgprompt.seo.h2": "Dominando Prompts de Midjourney",

        "json.seo.keywords_label": "Palabras clave:",
        "json.seo.keywords": "formateador json, validador json, embellecedor json",
        "json.seo.h2": "Mejor Validador y Embellecedor JSON Online Gratis",

        "local.seo.h2": "Ejecutar LLMs Localmente con WebGPU",

        "md.seo.keywords_label": "Palabras clave:",
        "md.seo.keywords": "editor markdown, vista previa online, herramienta de escritura",
        "md.seo.h2": "Editor Markdown Online con Vista Previa",
        "md.seo.p1": "Escribe documentación, READMEs o blogs con nuestro editor Markdown de pantalla dividida. Exporta a HTML o .md.",

        "arena.seo.h2": "Eligiendo el LLM Adecuado para tu Tarea",

        "pwd.seo.keywords_label": "Palabras clave:",
        "pwd.seo.keywords": "generador de contraseñas, contraseña segura, herramienta de seguridad",
        "pwd.seo.h2": "Generador de Contraseñas Seguras y Aleatorias",
        "pwd.seo.p1": "Genera contraseñas fuertes directamente en tu navegador. Longitud y caracteres personalizables.",

        "prompt.seo.faq.title": "Preguntas Frecuentes",
        "prompt.seo.h2": "Cómo Escribir Mejores Prompts de IA",
        "prompt.seo.h2_faq": "Preguntas Frecuentes",
        "prompt.seo.p1": "Escribir prompts efectivos es clave para obtener los mejores resultados de LLMs como Claude y ChatGPT.",
        "prompt.seo.h3_xml": "Prompts Estructurados (XML)",
        "prompt.seo.p_xml": "Anthropic recomienda usar etiquetas XML para separar claramente las partes del prompt.",
        "prompt.seo.h3_role": "Rol y Contexto",
        "prompt.seo.p_role": "Siempre asigna una persona (ej. 'Eres un experto en Python') y provee contexto.",
        "prompt.faq.q1": "¿Diferencia entre Claude XML y ChatGPT Markdown?",
        "prompt.faq.a1": "Claude funciona mejor con etiquetas XML explícitas, mientras ChatGPT prefiere encabezados Markdown.",
        "prompt.faq.q2": "¿Es gratis este constructor de prompts?",
        "prompt.faq.a2": "Sí, esta herramienta es 100% gratuita y funciona en tu navegador.",

        "qr.seo.keywords_label": "Palabras clave:",
        "qr.seo.keywords": "generador código qr, qr online, herramienta gratis",
        "qr.seo.h2": "Generador de Códigos QR Personalizados Gratis",
        "qr.tab.generate": "Generar",
        "qr.tab.scan": "Escanear",
        "qr.scan.upload": "Subir Imagen QR",
        "qr.scan.result": "Resultado Decodificado",

        "uuid.seo.title": "Generador de UUID/GUID Masivo",
        "uuid.seo.desc": "Genera UUIDs versión 4 aleatorios instantáneamente. Útil para bases de datos y pruebas.",
        "uuid.seo.keywords_label": "Palabras clave:",
        "uuid.seo.keywords": "generador uuid, generador guid, id aleatorio",

        "ts.meta.title": "Convertidor Timestamp Unix",
        "ts.meta.desc": "Convierte timestamps Unix a fechas legibles y viceversa.",
        "ts.meta.keywords": "timestamp unix, convertidor epoch, timestamp a fecha",

        "ocr.lang": "Idioma",
        "ocr.status.processing": "Procesando Imagen...",
        "ocr.status.error": "Error durante el procesamiento",

        "sql.label.keywordCase": "Mayús/Minús Palabras Clave",
        "sql.label.indent": "Indentación",
        "sql.opt.preserve": "Preservar",
        "sql.opt.upper": "Mayúsculas",
        "sql.opt.lower": "Minúsculas",
        "sql.opt.space2": "2 Espacios",
        "sql.opt.space4": "4 Espacios",
        "sql.opt.tab": "Tabulador",

        "crop.label.bg": "Color de Fondo",
        "crop.bg.desc": "Rellenar áreas transparentes al ajustar",

        "yaml.style.label": "Estilo de Salida",
        "yaml.style.block": "Bloque (Default)",
        "yaml.style.flow": "Flujo (JSON-like)",
        "yaml.seo.h2": "Mejor Convertidor JSON / YAML Online",
        "yaml.seo.keywords_label": "Palabras clave:",
        "yaml.seo.keywords": "json a yaml, yaml a json, convertidor json",

        "pdf.ocr.title": "OCR PDF Escaneado",
        "pdf.ocr.desc": "Extraer texto de archivos PDF escaneados.",
        "pdf2word.seo.h2": "Convertidor PDF a Word Gratis Online",
        "pdf2word.seo.p1": "Convierte archivos PDF a documentos Word (.docx) editables. Rápido, gratis y seguro.",
        "pdf2jpg.seo.h2": "Convertidor PDF a JPG Gratis Online",
        "pdf2jpg.seo.p1": "Convierte páginas PDF a imágenes JPG de alta calidad. Descarga individual o ZIP."
    },
    pt: {
        "nav.home": "Início",
        "nav.login": "Entrar",
        "hero.title": "Todas as ferramentas que você precisa, em uma página.",
        "hero.subtitle": "Uma coleção categorizada de utilitários para desenvolvedores, conversores e ferramentas de produtividade.",
        "search.placeholder": "Buscar ferramenta (ex. Formatador JSON)...",
        "search.btn": "Buscar",

        "nav.categories": "Categorias",
        "nav.about": "Sobre",
        "cat.featured": "Destaques",
        "cat.ai": "Laboratório IA",
        "cat.format": "Formatação",
        "cat.media": "Mídia e Imagens",
        "cat.doc": "Documentos PDF",
        "cat.dev": "Desenvolvimento",
        "footer.rights": "© 2026 allinone.page. Todos os direitos reservados.",
        "footer.privacy": "Privacidade",
        "footer.terms": "Termos",
        "footer.contact": "Contato",
        "tool.launch": "Abrir Ferramenta",
        "meta.title": "Ferramentas para Desenvolvedores - PDF para Excel, JSON",
        "meta.desc": "Ferramentas online gratuitas: conversor de PDF, formatador JSON, compressor de imagens. Seguro e no navegador.",
        "tool.pdf.title": "PDF para Excel",
        "tool.json.title": "Formatador JSON",
        "tool.prompt.title": "Construtor de Prompts",
        "tool.aicost.title": "Estimador de Custo IA",
        "tool.imgprompt.title": "Gerador de Prompts de Imagem",
        "tool.local.title": "LLM Local",
        "feedback.title": "Feedback",
        "feedback.placeholder": "Encontrou um bug?",
        "feedback.button": "Enviar",

        // New SEO & Tools
        "aicost.title.estimated": "Custo Estimado por Requisição",
        "aicost.title.understanding": "Entendendo Preços da API LLM",
        "aicost.title.tokens": "Tokens de Entrada vs Saída",
        "aicost.faq.title": "Perguntas Frequentes",

        "bgrem.seo.keywords_label": "Palavras-chave:",
        "bgrem.seo.keywords": "remover fundo, remover fundo ia, ferramenta online gratis",
        "bgrem.seo.faq.title": "Perguntas Frequentes",

        "base64.seo.keywords_label": "Palavras-chave:",
        "base64.seo.keywords": "codificador base64, decodificador base64, conversor online",

        "diff.seo.keywords_label": "Palavras-chave:",
        "diff.seo.keywords": "diferença texto, diff código, comparar texto online",
        "diff.seo.h2": "Verificador de Diferença de Texto Online",

        "img.seo.keywords_label": "Palavras-chave:",
        "img.seo.keywords": "compressor imagem, reduzir tamanho imagem, compressão sem perda",
        "img.seo.faq.title": "Perguntas Frequentes",
        "img.seo.h2_compress": "Comprimir Imagens Online Sem Perder Qualidade",
        "img.seo.h2_faq": "Perguntas Frequentes",

        "imgprompt.seo.h2": "Dominando Prompts do Midjourney",

        "json.seo.keywords_label": "Palavras-chave:",
        "json.seo.keywords": "formatador json, validador json, embelezador json",
        "json.seo.h2": "Melhor Validador e Formatador JSON Online Grátis",

        "local.seo.h2": "Executar LLMs Localmente com WebGPU",

        "md.seo.keywords_label": "Palavras-chave:",
        "md.seo.keywords": "editor markdown, pré-visualização online, ferramenta escrita",
        "md.seo.h2": "Editor Markdown Online com Pré-visualização",
        "md.seo.p1": "Escreva documentação, READMEs ou blogs com nosso editor Markdown. Exporte para HTML ou .md.",

        "arena.seo.h2": "Escolhendo o LLM Certo para sua Tarefa",

        "pwd.seo.keywords_label": "Palavras-chave:",
        "pwd.seo.keywords": "gerador senha, senha forte, ferramenta segurança",
        "pwd.seo.h2": "Gerador de Senhas Seguras e Aleatórias",
        "pwd.seo.p1": "Gere senhas fortes diretamente no seu navegador. Comprimento e caracteres personalizáveis.",

        "prompt.seo.faq.title": "Perguntas Frequentes",
        "prompt.seo.h2": "Como Escrever Melhores Prompts de IA",
        "prompt.seo.h2_faq": "Perguntas Frequentes",
        "prompt.seo.p1": "Escrever prompts eficazes é chave para obter melhores resultados de LLMs como Claude e ChatGPT.",
        "prompt.seo.h3_xml": "Prompts Estruturados (XML)",
        "prompt.seo.p_xml": "Anthropic recomenda usar tags XML para separar claramente as partes do prompt.",
        "prompt.seo.h3_role": "Papel e Contexto",
        "prompt.seo.p_role": "Sempre atribua uma persona (ex. 'Você é um expert em Python') e forneça contexto.",
        "prompt.faq.q1": "Diferença entre Claude XML e ChatGPT Markdown?",
        "prompt.faq.a1": "Claude funciona melhor com tags XML explícitas, enquanto ChatGPT prefere cabeçalhos Markdown.",
        "prompt.faq.q2": "Este construtor de prompts é grátis?",
        "prompt.faq.a2": "Sim, esta ferramenta é 100% gratuita e roda no seu navegador.",

        "qr.seo.keywords_label": "Palavras-chave:",
        "qr.seo.keywords": "gerador qr code, qr online, ferramenta gratis",
        "qr.seo.h2": "Gerador de QR Code Personalizado Grátis",
        "qr.tab.generate": "Gerar",
        "qr.tab.scan": "Escanear",
        "qr.scan.upload": "Upload Imagem QR",
        "qr.scan.result": "Resultado Decodificado",

        "uuid.seo.title": "Gerador de UUID/GUID em Massa",
        "uuid.seo.desc": "Gere UUIDs versão 4 aleatórios instantaneamente. Útil para bancos de dados e testes.",
        "uuid.seo.keywords_label": "Palavras-chave:",
        "uuid.seo.keywords": "gerador uuid, generador guid, id aleatorio",

        "ts.meta.title": "Conversor Timestamp Unix",
        "ts.meta.desc": "Converta timestamps Unix para datas legíveis e vice-versa.",
        "ts.meta.keywords": "timestamp unix, conversor epoch, timestamp para data",

        "ocr.lang": "Idioma",
        "ocr.status.processing": "Processando Imagem...",
        "ocr.status.error": "Erro durante processamento",

        "sql.label.keywordCase": "Maiúsc/Minúsc Palavras-chave",
        "sql.label.indent": "Indentação",
        "sql.opt.preserve": "Preservar",
        "sql.opt.upper": "Maiúsculas",
        "sql.opt.lower": "Minúsculas",
        "sql.opt.space2": "2 Espaços",
        "sql.opt.space4": "4 Espaços",
        "sql.opt.tab": "Tabulação",

        "crop.label.bg": "Cor de Fundo",
        "crop.bg.desc": "Preencher áreas transparentes ao ajustar",

        "yaml.style.label": "Estilo de Saída",
        "yaml.style.block": "Bloco (Default)",
        "yaml.style.flow": "Fluxo (JSON-like)",
        "yaml.seo.h2": "Melhor Conversor JSON / YAML Online",
        "yaml.seo.keywords_label": "Palavras-chave:",
        "yaml.seo.keywords": "json para yaml, yaml para json, conversor json",

        "pdf.ocr.title": "OCR PDF Escaneado",
        "pdf.ocr.desc": "Extrair texto de arquivos PDF escaneados.",
        "pdf2word.seo.h2": "Conversor PDF para Word Grátis Online",
        "pdf2word.seo.p1": "Converta arquivos PDF para documentos Word (.docx) editáveis. Rápido, grátis e seguro.",
        "pdf2jpg.seo.h2": "Conversor PDF para JPG Grátis Online",
        "pdf2jpg.seo.p1": "Converta páginas PDF para imagens JPG de alta qualidade. Download individual ou ZIP."
    },
    id: {
        "nav.home": "Beranda",
        "nav.login": "Masuk",
        "hero.title": "Semua alat yang Anda butuhkan, dalam satu halaman.",
        "hero.subtitle": "Koleksi utilitas pengembang, konverter, dan alat produktivitas yang dikategorikan.",
        "search.placeholder": "Cari alat (mis. JSON Formatter)...",
        "search.btn": "Cari",

        "nav.categories": "Kategori",
        "nav.about": "Tentang",
        "cat.featured": "Unggulan",
        "cat.ai": "Lab AI",
        "cat.format": "Format & Konversi",
        "cat.media": "Media & Gambar",
        "cat.doc": "Dokumen & PDF",
        "cat.dev": "Kode & Keamanan",
        "footer.rights": "© 2026 allinone.page. Hak Cipta Dilindungi.",
        "footer.privacy": "Kebijakan Privasi",
        "footer.terms": "Syarat Layanan",
        "footer.contact": "Kontak",
        "tool.launch": "Buka Alat",
        "meta.title": "Direktori Alat Pengembang - PDF ke Excel, JSON, Gambar",
        "meta.desc": "Alat pengembang online gratis termasuk konverter PDF ke Excel, pemformat JSON, kompresor gambar. Pemrosesan sisi klien yang aman.",
        "tool.pdf.title": "Konverter PDF ke Excel",
        "tool.json.title": "Pemformat JSON",
        "tool.prompt.title": "Pembuat Prompt",
        "tool.aicost.title": "Estimasi Biaya AI",
        "tool.local.title": "Jalankan LLM Lokal",
        "feedback.title": "Kirim Masukan",
        "feedback.placeholder": "Apa yang Anda pikirkan?",
        "feedback.button": "Kirim",

        // New SEO & Tools
        "aicost.title.estimated": "Perkiraan Biaya per Permintaan",
        "aicost.title.understanding": "Memahami Harga API LLM",
        "aicost.title.tokens": "Token Input vs Output",
        "aicost.faq.title": "Pertanyaan Umum",

        "bgrem.seo.keywords_label": "Kata Kunci Terkait:",
        "bgrem.seo.keywords": "hapus background, hapus latar belakang ai, alat online gratis",
        "bgrem.seo.faq.title": "Pertanyaan Umum",

        "base64.seo.keywords_label": "Kata Kunci Terkait:",
        "base64.seo.keywords": "encoder base64, decoder base64, konverter online",

        "diff.seo.keywords_label": "Kata Kunci Terkait:",
        "diff.seo.keywords": "beda teks, diff kode, bandingkan teks online",
        "diff.seo.h2": "Pemeriksa Perbedaan Teks Online",

        "img.seo.keywords_label": "Kata Kunci Terkait:",
        "img.seo.keywords": "kompresor gambar, perkecil ukuran gambar, kompresi lossless",
        "img.seo.faq.title": "Pertanyaan Umum",
        "img.seo.h2_compress": "Kompres Gambar Online Tanpa Mengurangi Kualitas",
        "img.seo.h2_faq": "Pertanyaan Umum",

        "imgprompt.seo.h2": "Menguasai Prompt Midjourney",

        "json.seo.keywords_label": "Kata Kunci Terkait:",
        "json.seo.keywords": "pemformat json, validator json, pemepercantik json",
        "json.seo.h2": "Validator dan Pemformat JSON Online Gratis Terbaik",

        "local.seo.h2": "Menjalankan LLM Secara Lokal dengan WebGPU",

        "md.seo.keywords_label": "Kata Kunci Terkait:",
        "md.seo.keywords": "editor markdown, pratinjau online, alat tulis",
        "md.seo.h2": "Editor Markdown Online dengan Pratinjau",
        "md.seo.p1": "Tulis dokumentasi, README, atau blog dengan editor Markdown layar terbagi kami. Ekspor ke HTML atau .md.",

        "arena.seo.h2": "Memilih LLM yang Tepat untuk Tugas Anda",

        "pwd.seo.keywords_label": "Kata Kunci Terkait:",
        "pwd.seo.keywords": "pembuat kata sandi, kata sandi kuat, alat keamanan",
        "pwd.seo.h2": "Pembuat Kata Sandi Acak Aman",
        "pwd.seo.p1": "Buat kata sandi kuat langsung di browser Anda. Panjang dan karakter dapat disesuaikan.",

        "prompt.seo.faq.title": "Pertanyaan Umum",
        "prompt.seo.h2": "Cara Menulis Prompt AI yang Lebih Baik",
        "prompt.seo.h2_faq": "Pertanyaan Umum",
        "prompt.seo.p1": "Menulis prompt yang efektif adalah kunci untuk mendapatkan hasil terbaik dari LLM seperti Claude dan ChatGPT.",
        "prompt.seo.h3_xml": "Prompt Terstruktur (XML)",
        "prompt.seo.p_xml": "Anthropic menyarankan penggunaan tag XML untuk memisahkan bagian prompt dengan jelas.",
        "prompt.seo.h3_role": "Peran & Konteks",
        "prompt.seo.p_role": "Selalu tetapkan persona (mis. 'Anda adalah ahli Python') dan berikan konteks.",
        "prompt.faq.q1": "Perbedaan antara Claude XML dan ChatGPT Markdown?",
        "prompt.faq.a1": "Claude bekerja lebih baik dengan tag XML eksplisit, sementara ChatGPT lebih suka header Markdown.",
        "prompt.faq.q2": "Apakah pembuat prompt ini gratis?",
        "prompt.faq.a2": "Ya, alat ini 100% gratis dan berjalan di browser Anda.",

        "qr.seo.keywords_label": "Kata Kunci Terkait:",
        "qr.seo.keywords": "pembuat kode qr, qr online, alat gratis",
        "qr.seo.h2": "Pembuat Kode QR Kustom Gratis",
        "qr.tab.generate": "Buat",
        "qr.tab.scan": "Pindai",
        "qr.scan.upload": "Unggah Gambar QR",
        "qr.scan.result": "Hasil Dekode",

        "uuid.seo.title": "Pembuat UUID/GUID Massal",
        "uuid.seo.desc": "Buat UUID versi 4 acak secara instan. Berguna untuk database dan pengujian.",
        "uuid.seo.keywords_label": "Kata Kunci Terkait:",
        "uuid.seo.keywords": "pembuat uuid, pembuat guid, id acak",

        "ts.meta.title": "Konverter Timestamp Unix",
        "ts.meta.desc": "Konversi timestamp Unix ke tanggal yang dapat dibaca dan sebaliknya.",
        "ts.meta.keywords": "timestamp unix, konverter epoch, timestamp ke tanggal",

        "ocr.lang": "Bahasa",
        "ocr.status.processing": "Memproses Gambar...",
        "ocr.status.error": "Kesalahan saat memproses",

        "sql.label.keywordCase": "Huruf Besar/Kecil Kata Kunci",
        "sql.label.indent": "Indentasi",
        "sql.opt.preserve": "Biarkan",
        "sql.opt.upper": "Huruf Besar",
        "sql.opt.lower": "Huruf Kecil",
        "sql.opt.space2": "2 Spasi",
        "sql.opt.space4": "4 Spasi",
        "sql.opt.tab": "Tab",

        "crop.label.bg": "Warna Latar Belakang",
        "crop.bg.desc": "Isi area transparan saat menyesuaikan gambar",

        "yaml.style.label": "Gaya Output",
        "yaml.style.block": "Blok (Default)",
        "yaml.style.flow": "Alir (Mirip JSON)",
        "yaml.seo.h2": "Konverter JSON / YAML Online Terbaik",
        "yaml.seo.keywords_label": "Kata Kunci Terkait:",
        "yaml.seo.keywords": "json ke yaml, yaml ke json, konverter json",

        "pdf.ocr.title": "OCR PDF Terpindai",
        "pdf.ocr.desc": "Ekstrak teks dari file PDF hasil pindaian.",
        "pdf2word.seo.h2": "Konverter PDF ke Word Gratis Online",
        "pdf2word.seo.p1": "Konversi file PDF ke dokumen Word (.docx) yang dapat diedit. Cepat, gratis, dan aman.",
        "pdf2jpg.seo.h2": "Konverter PDF ke JPG Gratis Online",
        "pdf2jpg.seo.p1": "Konversi halaman PDF ke gambar JPG berkualitas tinggi. Unduh satu per satu atau ZIP."
    },
    hi: {
        "nav.home": "होम",
        "nav.login": "लॉग इन",
        "hero.title": "आपको जो भी उपकरण चाहिए, एक ही पृष्ठ में।",
        "hero.subtitle": "डेवलपर यूटिलिटीज, कन्वर्टर्स और उत्पादकता उपकरणों का एक श्रेणीबद्ध संग्रह।",
        "search.placeholder": "उपकरण खोजें (उदा. JSON फॉर्बैट)...",
        "search.btn": "खोजें",

        "nav.categories": "श्रेणियाँ",
        "nav.about": "हमारे बारे में",
        "cat.featured": "विशेष रुप से प्रदर्शित",
        "cat.ai": "एआई लैब",
        "cat.format": "प्रारूपण और रूपांतरण",
        "cat.media": "छवियाँ और मीडिया",
        "cat.doc": "दस्तावेज़ और पीडीएफ",
        "cat.dev": "कोडिंग और सुरक्षा",
        "footer.rights": "© 2026 allinone.page. सर्वाधिकार सुरक्षित।",
        "footer.privacy": "गोपनीयता नीति",
        "footer.terms": "सेवा की शर्तें",
        "footer.contact": "संपर्क करें",
        "tool.launch": "टूल खोलें",
        "meta.title": "डेवलपर टूल्स डायरेक्टरी - PDF to Excel, JSON, Images",
        "meta.desc": "मुफ्त ऑनलाइन डेवलपर टूल जिसमें पीडीएफ से एक्सेल कनवर्टर, जेएसओएन फॉर्मेटर शामिल हैं। सुरक्षित, क्लाइंट-साइड प्रोसेसिंग।",
        "tool.pdf.title": "PDF से Excel कनवर्टर",
        "tool.json.title": "JSON फॉर्मेटर",
        "tool.prompt.title": "प्रॉम्प्ट बिल्डर",
        "tool.aicost.title": "एआई लागत अनुमानक",
        "tool.local.title": "लोकल LLM रनर",
        "feedback.title": "प्रतिक्रिया भेजें",
        "feedback.placeholder": "आपके मन में क्या है?",
        "feedback.button": "भेजें",

        // New SEO & Tools
        "aicost.title.estimated": "प्रति अनुरोध अनुमानित लागत",
        "aicost.title.understanding": "एलएलएम एपीआई मूल्य निर्धारण को समझना",
        "aicost.title.tokens": "इनपुट बनाम आउटपुट टोकन",
        "aicost.faq.title": "अक्सर पूछे जाने वाले प्रश्न",

        "bgrem.seo.keywords_label": "संबंधित कीवर्ड:",
        "bgrem.seo.keywords": "बैकग्राउंड रिमूवर, एआई बैकग्राउंड हटाना, मुफ्त ऑनलाइन टूल",
        "bgrem.seo.faq.title": "अक्सर पूछे जाने वाले प्रश्न",

        "base64.seo.keywords_label": "संबंधित कीवर्ड:",
        "base64.seo.keywords": "base64 एनकोडर, base64 डिकोडर, ऑनलाइन कनवर्टर",

        "diff.seo.keywords_label": "संबंधित कीवर्ड:",
        "diff.seo.keywords": "टेक्स्ट अंतर, कोड अंतर, ऑनलाइन टेक्स्ट तुलना",
        "diff.seo.h2": "ऑनलाइन टेक्स्ट अंतर चेकर",

        "img.seo.keywords_label": "संबंधित कीवर्ड:",
        "img.seo.keywords": "इमेज कंप्रेसर, इमेज का आकार कम करें, लॉसलेस कंप्रेशन",
        "img.seo.faq.title": "अक्सर पूछे जाने वाले प्रश्न",
        "img.seo.h2_compress": "गुणवत्ता खोए बिना ऑनलाइन इमेज कंप्रेस करें",
        "img.seo.h2_faq": "अक्सर पूछे जाने वाले प्रश्न",

        "imgprompt.seo.h2": "Midjourney प्रॉम्प्ट्स में महारत हासिल करना",

        "json.seo.keywords_label": "संबंधित कीवर्ड:",
        "json.seo.keywords": "json फॉर्मेटर, json वैलिडेटर, json ब्यूटीफायर",
        "json.seo.h2": "सर्वश्रेष्ठ मुफ्त ऑनलाइन JSON वैलिडेटर और ब्यूटीफायर",

        "local.seo.h2": "WebGPU के साथ स्थानीय रूप से LLM चलाना",

        "md.seo.keywords_label": "संबंधित कीवर्ड:",
        "md.seo.keywords": "markdown एडिटर, ऑनलाइन पूर्वावलोकन, लेखन उपकरण",
        "md.seo.h2": "पूर्वावलोकन के साथ ऑनलाइन Markdown एडिटर",
        "md.seo.p1": "हमारे स्प्लिट-स्क्रीन Markdown एडिटर के साथ दस्तावेज़, README या ब्लॉग लिखें। सीधे HTML या .md में निर्यात करें।",

        "arena.seo.h2": "अपने कार्य के लिए सही LLM चुनना",

        "pwd.seo.keywords_label": "संबंधित कीवर्ड:",
        "pwd.seo.keywords": "पासवर्ड जनरेटर, मजबूत पासवर्ड, सुरक्षा उपकरण",
        "pwd.seo.h2": "सुरक्षित यादृच्छिक पासवर्ड जनरेटर",
        "pwd.seo.p1": "अपने ब्राउज़र में सीधे मजबूत पासवर्ड बनाएं। लंबाई और अक्षर अनुकूलन योग्य।",

        "prompt.seo.faq.title": "अक्सर पूछे जाने वाले प्रश्न",
        "prompt.seo.h2": "बेहतर AI प्रॉम्प्ट्स कैसे लिखें",
        "prompt.seo.h2_faq": "अक्सर पूछे जाने वाले प्रश्न",
        "prompt.seo.p1": "Claude और ChatGPT जैसे LLM से सर्वोत्तम परिणाम प्राप्त करने के लिए प्रभावी प्रॉम्प्ट लिखना महत्वपूर्ण है।",
        "prompt.seo.h3_xml": "संरचित प्रॉम्प्टिंग (XML)",
        "prompt.seo.p_xml": "Anthropic प्रॉम्प्ट के विभिन्न भागों को स्पष्ट रूप से अलग करने के लिए XML टैग का उपयोग करने की सलाह देता है।",
        "prompt.seo.h3_role": "भूमिका और संदर्भ",
        "prompt.seo.p_role": "हमेशा एक व्यक्तित्व (जैसे 'आप एक पायथन विशेषज्ञ हैं') असाइन करें और संदर्भ प्रदान करें।",
        "prompt.faq.q1": "Claude XML और ChatGPT Markdown में क्या अंतर है?",
        "prompt.faq.a1": "Claude स्पष्ट XML टैग के साथ बेहतर काम करता है, जबकि ChatGPT Markdown हेडर पसंद करता है।",
        "prompt.faq.q2": "क्या यह प्रॉम्प्ट बिल्डर मुफ्त है?",
        "prompt.faq.a2": "हां, यह टूल 100% मुफ्त है और आपके ब्राउज़र में चलता है।",

        "qr.seo.keywords_label": "संबंधित कीवर्ड:",
        "qr.seo.keywords": "qr कोड जनरेटर, ऑनलाइन qr, मुफ्त टूल",
        "qr.seo.h2": "मुफ्त कस्टम QR कोड जनरेटर",
        "qr.tab.generate": "उत्पन्न करें",
        "qr.tab.scan": "स्कैन करें",
        "qr.scan.upload": "QR छवि अपलोड करें",
        "qr.scan.result": "डिकोड किया गया परिणाम",

        "uuid.seo.title": "बल्क UUID/GUID जनरेटर",
        "uuid.seo.desc": "तुरंत रैंडम संस्करण 4 UUID उत्पन्न करें। डेटाबेस और परीक्षण के लिए उपयोगी।",
        "uuid.seo.keywords_label": "संबंधित कीवर्ड:",
        "uuid.seo.keywords": "uuid जनरेटर, guid जनरेटर, रैंडम आईडी",

        "ts.meta.title": "Unix टाइमस्टैम्प कनवर्टर",
        "ts.meta.desc": "Unix टाइमस्टैम्प को पठनीय तिथियों में और इसके विपरीत बदलें।",
        "ts.meta.keywords": "unix टाइमस्टैम्प, epoch कनवर्टर, टाइमस्टैम्प से तिथि",

        "ocr.lang": "भाषा",
        "ocr.status.processing": "छवि संसाधित की जा रही है...",
        "ocr.status.error": "प्रसंस्करण के दौरान त्रुटि",

        "sql.label.keywordCase": "कीवर्ड केस",
        "sql.label.indent": "इंडेंटेशन",
        "sql.opt.preserve": "संरक्षित करें",
        "sql.opt.upper": "बड़े अक्षर",
        "sql.opt.lower": "छोटे अक्षर",
        "sql.opt.space2": "2 रिक्त स्थान",
        "sql.opt.space4": "4 रिक्त स्थान",
        "sql.opt.tab": "टैब",

        "crop.label.bg": "पृष्ठभूमि का रंग",
        "crop.bg.desc": "छवि फिट करते समय पारदर्शी क्षेत्रों को भरें",

        "yaml.style.label": "आउटपुट शैली",
        "yaml.style.block": "ब्लॉक (डिफ़ॉल्ट)",
        "yaml.style.flow": "फ्लो (JSON-जैसा)",
        "yaml.seo.h2": "सर्वश्रेष्ठ ऑनलाइन JSON / YAML कनवर्टर",
        "yaml.seo.keywords_label": "संबंधित कीवर्ड:",
        "yaml.seo.keywords": "json से yaml, yaml से json, json कनवर्टर",

        "pdf.ocr.title": "OCR स्कैन किया गया PDF",
        "pdf.ocr.desc": "स्कैन की गई PDF फ़ाइलों से टेक्स्ट निकालें।",
        "pdf2word.seo.h2": "मुफ्त ऑनलाइन PDF से Word कनवर्टर",
        "pdf2word.seo.p1": "PDF फ़ाइलों को संपादन योग्य Word दस्तावेज़ों (.docx) में बदलें। तेज़, मुफ्त और सुरक्षित।",
        "pdf2jpg.seo.h2": "मुफ्त ऑनलाइन PDF से JPG कनवर्टर",
        "pdf2jpg.seo.p1": "PDF पृष्ठों को उच्च गुणवत्ता वाली JPG छवियों में बदलें। एकल या ज़िप डाउनलोड करें।"
    },
    ar: {
        "nav.home": "الرئيسية",
        "nav.login": "تسجيل الدخول",
        "hero.title": "جميع الأدوات التي تحتاجها، في صفحة واحدة.",
        "hero.subtitle": "مجموعة مصنفة من أدوات المطورين، والمحولات، وأدوات الإنتاجية.",
        "search.placeholder": "البحث عن أداة (مثل منسق JSON)...",
        "search.btn": "بحث",

        "nav.categories": "الفئات",
        "nav.about": "من نحن",
        "cat.featured": "متميز",
        "cat.ai": "مختبر الذكاء الاصطناعي",
        "cat.format": "تنسيق وتحويل",
        "cat.media": "الصور والوسائط",
        "cat.doc": "المستندات و PDF",
        "cat.dev": "البرمجة والأمن",
        "footer.rights": "© 2026 allinone.page. جميع الحقوق محفوظة.",
        "footer.privacy": "سياسة الخصوصية",
        "footer.terms": "شروط الخدمة",
        "footer.contact": "اتصل بنا",
        "tool.launch": "تشغيل الأداة",
        "meta.title": "دليل أدوات المطورين - تحويل PDF إلى Excel، JSON",
        "meta.desc": "أدوات مطورين مجانية عبر الإنترنت بما في ذلك محول PDF إلى Excel، ومنسق JSON. معالجة آمنة من جانب العميل.",
        "tool.pdf.title": "محول PDF إلى Excel",
        "tool.json.title": "منسق JSON",
        "tool.prompt.title": "منشئ المطالبات",
        "tool.aicost.title": "مقدر تكلفة الذكاء الاصطناعي",
        "tool.local.title": "تشغيل LLM محلي",
        "feedback.title": "إرسال تعليقات",
        "feedback.placeholder": "ما الذي يدور في ذهنك؟",
        "feedback.button": "إرسال",

        // New SEO & Tools
        "aicost.title.estimated": "التكلفة المقدرة لكل طلب",
        "aicost.title.understanding": "فهم تسعير واجهات برمجة تطبيقات LLM",
        "aicost.title.tokens": "رموز الإدخال مقابل الإخراج",
        "aicost.faq.title": "الأسئلة الشائعة",

        "bgrem.seo.keywords_label": "كلمات ذات صلة:",
        "bgrem.seo.keywords": "إزالة الخلفية, مسح الخلفية بالذكاء الاصطناعي, أداة مجانية عبر الإنترنت",
        "bgrem.seo.faq.title": "الأسئلة الشائعة",

        "base64.seo.keywords_label": "كلمات ذات صلة:",
        "base64.seo.keywords": "مشفر base64, مفكك تشفير base64, محول عبر الإنترنت",

        "diff.seo.keywords_label": "كلمات ذات صلة:",
        "diff.seo.keywords": "فرق النص, فرق الكود, مقارنة النصوص عبر الإنترنت",
        "diff.seo.h2": "أداة فحص فرق النصوص عبر الإنترنت",

        "img.seo.keywords_label": "كلمات ذات صلة:",
        "img.seo.keywords": "ضاغط الصور, تقليل حجم الصورة, ضغط بدون فقدان الجودة",
        "img.seo.faq.title": "الأسئلة الشائعة",
        "img.seo.h2_compress": "ضغط الصور عبر الإنترنت دون فقدان الجودة",
        "img.seo.h2_faq": "الأسئلة الشائعة",

        "imgprompt.seo.h2": "إتقان مطالبات Midjourney",

        "json.seo.keywords_label": "كلمات ذات صلة:",
        "json.seo.keywords": "منسق json, مدقق json, مجمل json",
        "json.seo.h2": "أفضل مدقق ومنسق JSON مجاني عبر الإنترنت",

        "local.seo.h2": "تشغيل LLMs محليًا باستخدام WebGPU",

        "md.seo.keywords_label": "كلمات ذات صلة:",
        "md.seo.keywords": "محرر markdown, معاينة مباشرة, أداة كتابة",
        "md.seo.h2": "محرر Markdown عبر الإنترنت مع معاينة",
        "md.seo.p1": "اكتب الوثائق أو ملفات README أو المدونات باستخدام محرر Markdown المقسم للشاشة. تصدير إلى HTML أو .md.",

        "arena.seo.h2": "اختيار LLM المناسب لمهمتك",

        "pwd.seo.keywords_label": "كلمات ذات صلة:",
        "pwd.seo.keywords": "مولد كلمات المرور, كلمة مرور قوية, أداة أمان",
        "pwd.seo.h2": "مولد كلمات مرور عشوائية آمنة",
        "pwd.seo.p1": "أنشئ كلمات مرور قوية مباشرة في متصفحك. طول وأحرف قابلة للتخصيص.",

        "prompt.seo.faq.title": "الأسئلة الشائعة",
        "prompt.seo.h2": "كيفية كتابة مطالبات ذكاء اصطناعي أفضل",
        "prompt.seo.h2_faq": "الأسئلة الشائعة",
        "prompt.seo.p1": "كتابة مطالبات فعالة هو مفتاح الحصول على أفضل النتائج من نماذج LLM مثل Claude و ChatGPT.",
        "prompt.seo.h3_xml": "المطالبات الهيكلية (XML)",
        "prompt.seo.p_xml": "يوصي Anthropic باستخدام علامات XML لفصل أجزاء المطالبة بوضوح.",
        "prompt.seo.h3_role": "الدور والسياق",
        "prompt.seo.p_role": "قم دائمًا بتعيين شخصية (مثلاً 'أنت خبير بايثون') وقدم السياق.",
        "prompt.faq.q1": "ما الفرق بين Claude XML و ChatGPT Markdown؟",
        "prompt.faq.a1": "يعمل Claude بشكل أفضل مع علامات XML الصريحة، بينما يفضل ChatGPT عناوين Markdown.",
        "prompt.faq.q2": "هل منشئ المطالبات هذا مجاني؟",
        "prompt.faq.a2": "نعم، هذه الأداة مجانية 100% وتعمل في متصفحك.",

        "qr.seo.keywords_label": "كلمات ذات صلة:",
        "qr.seo.keywords": "مولد رمز الاستجابة السريعة, qr عبر الإنترنت, أداة مجانية",
        "qr.seo.h2": "مولد رمز استجابة سريعة مخصص مجاني",
        "qr.tab.generate": "إنشاء",
        "qr.tab.scan": "مسح",
        "qr.scan.upload": "تحميل صورة QR",
        "qr.scan.result": "نتيجة فك التشفير",

        "uuid.seo.title": "مولد UUID/GUID بالجملة",
        "uuid.seo.desc": "أنشئ UUIDs عشوائية من الإصدار 4 فورًا. مفيد لقواعد البيانات والاختبار.",
        "uuid.seo.keywords_label": "كلمات ذات صلة:",
        "uuid.seo.keywords": "مولد uuid, مولد guid, معرف عشوائي",

        "ts.meta.title": "محول الطابع الزمني Unix",
        "ts.meta.desc": "تحويل طوابع Unix الزمنية إلى تواريخ قابلة للقراءة والعكس.",
        "ts.meta.keywords": "طابع زمني unix, محول epoch, طابع زمني إلى تاريخ",

        "ocr.lang": "اللغة",
        "ocr.status.processing": "جارٍ معالجة الصورة...",
        "ocr.status.error": "خطأ أثناء المعالجة",

        "sql.label.keywordCase": "حالة الكلمات الرئيسية",
        "sql.label.indent": "مسافة بادئة",
        "sql.opt.preserve": "حافظ على الأصل",
        "sql.opt.upper": "أحرف كبيرة",
        "sql.opt.lower": "أحرف صغيرة",
        "sql.opt.space2": "مسافتان",
        "sql.opt.space4": "4 مسافات",
        "sql.opt.tab": "علامة جدولة",

        "crop.label.bg": "لون الخلفية",
        "crop.bg.desc": "ملء المناطق الشفافة عند احتواء الصورة",

        "yaml.style.label": "نمط الإخراج",
        "yaml.style.block": "كتلة (افتراضي)",
        "yaml.style.flow": "تدفق (يشبه JSON)",
        "yaml.seo.h2": "أفضل محول JSON / YAML عبر الإنترنت",
        "yaml.seo.keywords_label": "كلمات ذات صلة:",
        "yaml.seo.keywords": "json إلى yaml, yaml إلى json, محول json",

        "pdf.ocr.title": "OCR لملفات PDF الممسوحة ضوئيًا",
        "pdf.ocr.desc": "استخراج النص من ملفات PDF الممسوحة ضوئيًا.",
        "pdf2word.seo.h2": "محول PDF إلى Word مجاني عبر الإنترنت",
        "pdf2word.seo.p1": "تحويل ملفات PDF إلى مستندات Word (.docx) قابلة للتحرير. سريع ومجاني وآمن.",
        "pdf2jpg.seo.h2": "محول PDF إلى JPG مجاني عبر الإنترنت",
        "pdf2jpg.seo.p1": "تحويل صفحات PDF إلى صور JPG عالية الجودة. تنزيل فردي أو مضغوط."
    }
};

class I18nManager {
    constructor() {
        if (typeof window !== 'undefined') {
            // 根据当前 URL 路径判断语言
            const pathLang = window.location.pathname.split('/')[1];
            const supported = ['en', 'zh', 'es', 'pt', 'id', 'hi', 'ar'];
            this.currentLang = supported.includes(pathLang) ? pathLang : 'en';

            // 设置 RTL
            if (this.currentLang === 'ar') {
                document.documentElement.dir = 'rtl';
            }

            this.init();
        }
    }

    init() {
        this.updateUIState();
    }

    // 核心修改：只负责跳转 URL，不再修改 DOM 文字
    setLanguage(lang) {
        if (this.currentLang === lang) return;

        // 保存偏好
        localStorage.setItem('app_lang', lang);

        const currentPath = window.location.pathname;
        const currentSearch = window.location.search;
        const currentHash = window.location.hash;

        // 路径前缀（例如 /en/, /zh/, /es/）
        const langs = ['en', 'zh', 'es', 'pt', 'id', 'hi', 'ar'];
        let pathParts = currentPath.split('/').filter(p => p);

        // 检查第一部分是否是语言代码
        if (langs.includes(pathParts[0])) {
            pathParts[0] = lang; // 替换现有语言
        } else {
            pathParts.unshift(lang); // 这是一个根路径（如 /index.html），添加语言
        }

        // 重组路径
        let newPath = '/' + pathParts.join('/');

        // 处理 RTL (仅用于即时预览，实际由 HTML dir 属性控制)
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }

        window.location.href = newPath + currentSearch + currentHash;
    }

    updateUIState() {
        // 只更新导航栏按钮的激活状态
        const btnEn = document.getElementById('lang-en');
        const btnZh = document.getElementById('lang-zh');

        if (btnEn && btnZh) {
            // 重置样式
            btnEn.classList.remove('font-bold', 'text-blue-600');
            btnZh.classList.remove('font-bold', 'text-blue-600');

            if (this.currentLang === 'en') {
                btnEn.classList.add('font-bold', 'text-blue-600');
            } else {
                btnZh.classList.add('font-bold', 'text-blue-600');
            }
        }
    }

    // 保留 t() 函数以防 JS 动态生成的组件（如搜索结果）需要用到
    t(key) {
        if (!translations[this.currentLang]) return key;
        return translations[this.currentLang][key] || key;
    }
}

if (typeof window !== 'undefined') {
    window.i18n = new I18nManager();
    window.changeLanguage = (lang) => {
        window.i18n.setLanguage(lang);
    };
}

// 供 generate.js 使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations };
}

/**
 * 全局反馈按钮注入逻辑
 * 自动在页面右下角添加一个"反馈"按钮，点击跳转 GitHub Issues
 */
if (typeof document !== 'undefined') {
    // Retry robustly to ensure injection
    const initFeedback = () => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', injectFeedbackButton);
        } else {
            injectFeedbackButton();
        }
    };
    initFeedback();
}
/**
 * 全局反馈组件 (Cloudflare D1 版本)
 * 点击展开悬浮窗，直接提交到 Worker
 */
function injectFeedbackButton() {
    if (document.getElementById('vibe-feedback-root')) return;

    // !!! 请替换为你部署后的 Worker URL !!!
    const API_URL = "https://feedback-api.simonvibe.workers.dev/";

    // 1. 创建容器
    const root = document.createElement('div');
    root.id = 'vibe-feedback-root';
    Object.assign(root.style, {
        position: 'fixed', bottom: '20px', right: '20px', zIndex: '10000',
        fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column', alignItems: 'flex-end'
    });

    // 2. 创建表单面板 (默认隐藏)
    const panel = document.createElement('div');
    Object.assign(panel.style, {
        backgroundColor: 'white', width: '300px', padding: '16px', borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)', marginBottom: '12px',
        display: 'none', flexDirection: 'column', gap: '10px',
        border: '1px solid #e5e7eb', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        transformOrigin: 'bottom right', transform: 'scale(0.9)', opacity: '0'
    });

    panel.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <h3 style="margin:0; font-size:14px; font-weight:600; color:#1f2937;">${window.i18n.t('feedback.title')}</h3>
            <button id="fb-close" style="background:none; border:none; color:#9ca3af; cursor:pointer; padding:4px;">&times;</button>
        </div>
        <textarea id="fb-message" placeholder="${window.i18n.t('feedback.placeholder')}" rows="3" 
            style="width:100%; padding:8px; border:1px solid #d1d5db; borderRadius:6px; font-size:13px; resize:none; outline:none; box-sizing:border-box;"></textarea>
        <button id="fb-submit" style="background:#2563eb; color:white; border:none; padding:8px; borderRadius:6px; font-size:13px; font-weight:500; cursor:pointer; transition:background 0.2s;">
            ${window.i18n.t('feedback.button')}
        </button>
        <div id="fb-status" style="font-size:12px; color:#6b7280; text-align:center; height:16px;"></div>
    `;

    // 3. 创建悬浮按钮
    const btn = document.createElement('button');
    btn.innerHTML = `<i class="fa-regular fa-comment-dots" style="font-size:1.2em;"></i>`;
    Object.assign(btn.style, {
        width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white',
        border: 'none', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s'
    });

    // --- 交互逻辑 ---

    // 切换面板显示/隐藏
    let isOpen = false;
    const togglePanel = () => {
        isOpen = !isOpen;
        if (isOpen) {
            panel.style.display = 'flex';
            // 强制重绘以触发动画
            requestAnimationFrame(() => {
                panel.style.transform = 'scale(1)';
                panel.style.opacity = '1';
            });
            setTimeout(() => document.getElementById('fb-message').focus(), 100);
        } else {
            panel.style.transform = 'scale(0.9)';
            panel.style.opacity = '0';
            setTimeout(() => panel.style.display = 'none', 200);
        }
    };

    btn.onclick = togglePanel;
    panel.querySelector('#fb-close').onclick = togglePanel;

    // 提交逻辑
    const submitBtn = panel.querySelector('#fb-submit');
    const textarea = panel.querySelector('#fb-message');
    const statusMsg = panel.querySelector('#fb-status');

    submitBtn.onclick = async () => {
        const msg = textarea.value.trim();
        if (!msg) return;

        // UI Loading 状态
        submitBtn.disabled = true;
        submitBtn.textContent = window.i18n.t('feedback.sending');
        submitBtn.style.backgroundColor = '#93c5fd';

        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    page: window.location.pathname, // 当前页面路径
                    message: msg
                })
            });

            if (res.ok) {
                statusMsg.textContent = window.i18n.t('feedback.success');
                statusMsg.style.color = "#059669"; // Green
                textarea.value = '';
                setTimeout(() => { togglePanel(); statusMsg.textContent = ''; }, 2000);
            } else {
                throw new Error('Failed');
            }
        } catch (e) {
            statusMsg.textContent = window.i18n.t('feedback.error');
            statusMsg.style.color = "#dc2626"; // Red
            console.error(e);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = window.i18n.t('feedback.button');
            submitBtn.style.backgroundColor = '#2563eb';
        }
    };

    root.appendChild(panel);
    root.appendChild(btn);
    document.body.appendChild(root);
}
