const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'PoojaServices.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace direction="left" and direction="right" with direction="up"
content = content.replace(/direction="left"/g, 'direction="up"');
content = content.replace(/direction="right"/g, 'direction="up"');

// Ensure staggered delays for the "wave" effect inside each section:
// Image gets 0.1s, Content gets 0.3s.

// Wait, doing this via string replace on delays might be messy if they are already 0.1s and 0.2s.
// I'll just leave the delays as 0.1s and 0.2s, which is a staggered wave!

fs.writeFileSync(filePath, content);
console.log('Update Complete.');
