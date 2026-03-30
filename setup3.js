const fs = require('fs');

fs.mkdirSync('portfolio', { recursive: true });

fs.writeFileSync('style.css', `/* placeholder - will be filled */`);
fs.writeFileSync('index.html', `<!-- placeholder -->`);
fs.writeFileSync('casino-reviews.html', `<!-- placeholder -->`);
fs.writeFileSync('portfolio/nina.html', `<!-- placeholder -->`);
fs.writeFileSync('portfolio/sam.html', `<!-- placeholder -->`);
fs.writeFileSync('portfolio/eray.html', `<!-- placeholder -->`);
fs.writeFileSync('portfolio/leanne.html', `<!-- placeholder -->`);

console.log('All files created');