const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, '../tools');

// Regex to find the Categories link in tool pages
// Matches: <a href="../../index.html#all-tools" ... >Categories</a>
// We want to replace #all-tools with #featured
const linkRegex = /href="\.\.\/\.\.\/index\.html#all-tools"/g;
const newLink = 'href="../../index.html#featured"';

function updateToolNavLinks() {
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

            if (content.match(linkRegex)) {
                const newContent = content.replace(linkRegex, newLink);
                if (newContent !== content) {
                    fs.writeFileSync(indexPath, newContent);
                    console.log(`Updated nav link for: ${tool}`);
                    updatedCount++;
                }
            } else {
                // Check if it's already updated or uses a different format
                if (!content.includes('href="../../index.html#featured"')) {
                    console.log(`No matching link found for: ${tool} (might be already updated or different)`);
                }
            }
        }
    });

    console.log(`\nSuccess! Updated ${updatedCount} tool pages.`);
}

updateToolNavLinks();
