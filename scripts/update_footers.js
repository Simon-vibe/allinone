const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, '../tools');

// The standard full footer to inject
const newFooter = `    <!-- Footer -->
    <footer class="bg-white border-t border-gray-100 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="flex items-center space-x-2 mb-4 md:mb-0">
                    <i class="fa-solid fa-screwdriver-wrench text-blue-600 text-xl"></i>
                    <a href="../../index.html" class="text-lg font-bold text-gray-900">allinone.page</a>
                </div>
                <div class="flex space-x-8 text-sm text-gray-500">
                    <a href="../../privacy.html" class="hover:text-blue-600 transition" data-i18n="footer.privacy">Privacy Policy</a>
                    <a href="../../terms.html" class="hover:text-blue-600 transition" data-i18n="footer.terms">Terms of Service</a>
                    <a href="../../about.html#contact" class="hover:text-blue-600 transition" data-i18n="footer.contact">Contact</a>
                </div>
            </div>
            <div class="mt-8 text-center md:text-right text-xs text-gray-400" data-i18n="footer.rights">
                &copy; 2026 allinone.page. All rights reserved.
            </div>
        </div>
    </footer>`;

// Regex to find the existing footer (simple or old full)
// This regex matches from <footer... to </footer>
const footerRegex = /<footer[\s\S]*?<\/footer>/;

function updateToolFooters() {
    if (!fs.existsSync(toolsDir)) {
        console.error('Tools directory not found!');
        return;
    }

    const tools = fs.readdirSync(toolsDir);
    let updatedCount = 0;

    tools.forEach(tool => {
        const indexPath = path.join(toolsDir, tool, 'index.html');
        if (fs.existsSync(indexPath)) {
            let content = fs.readFileSync(indexPath, 'utf-8');

            // simple check if it already has the full standard structure
            // we can check for a specific unique string in the new footer like "allinone.page" link with ../../
            // but for safety, we just replace whatever footer block is there.

            if (content.match(footerRegex)) {
                const newContent = content.replace(footerRegex, newFooter);
                if (newContent !== content) {
                    fs.writeFileSync(indexPath, newContent);
                    console.log(`Updated footer for: ${tool}`);
                    updatedCount++;
                } else {
                    console.log(`No change needed for: ${tool}`);
                }
            } else {
                console.warn(`No footer tag found in: ${tool}`);
            }
        }
    });

    console.log(`\nSuccess! Updated ${updatedCount} tool pages.`);
}

updateToolFooters();
