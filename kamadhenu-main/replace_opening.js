const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'PoojaServices.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Add import
if (!content.includes('ScrollReveal')) {
  content = content.replace(
    "import Services from '../components/Services';",
    "import Services from '../components/Services';\nimport ScrollReveal from '../components/ScrollReveal';"
  );
}

// Remove the global animate-fade-up from the wrapper
content = content.replace(
  'className={isHome ? "" : "page-wrapper animate-fade-up"}',
  'className={isHome ? "" : "page-wrapper"}'
);

// We need to replace all `<div className="animate-fade-up"` with `<ScrollReveal direction="..."`

let updated = content;

// A generic regex to match the inner divs.
// Actually, let's manually replace them since there are only 12 divs.

// Section 1: Left Image, Right Content
updated = updated.replace(
  /<div className="animate-fade-up" style=\{\{\s*flex: '1 1 350px',\s*animationDelay: '0\.1s'\s*\}\}>/g,
  '<ScrollReveal direction="left" delay="0.1s" style={{ flex: "1 1 350px" }}>'
);
updated = updated.replace(
  /<div className="animate-fade-up" style=\{\{\s*flex: '2 1 600px',\s*fontSize: '1\.1rem',\s*lineHeight: '1\.8',\s*color: 'var\(--color-text-body\)',\s*animationDelay: '0\.1s'\s*\}\}>/g,
  '<ScrollReveal direction="right" delay="0.2s" style={{ flex: "2 1 600px", fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text-body)" }}>'
);

// Section 2: Left Content, Right Image
updated = updated.replace(
  /<div className="animate-fade-up" style=\{\{\s*flex: '2 1 600px',\s*fontSize: '1\.1rem',\s*lineHeight: '1\.8',\s*color: 'var\(--color-text-body\)',\s*animationDelay: '0\.2s'\s*\}\}>/g,
  '<ScrollReveal direction="left" delay="0.1s" style={{ flex: "2 1 600px", fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text-body)" }}>'
);
updated = updated.replace(
  /<div className="animate-fade-up" style=\{\{\s*flex: '1 1 350px',\s*animationDelay: '0\.2s'\s*\}\}>/g,
  '<ScrollReveal direction="right" delay="0.2s" style={{ flex: "1 1 350px" }}>'
);

// Section 3: Left Image, Right Content
updated = updated.replace(
  /<div className="animate-fade-up" style=\{\{\s*flex: '1 1 350px',\s*animationDelay: '0\.3s'\s*\}\}>/g,
  '<ScrollReveal direction="left" delay="0.1s" style={{ flex: "1 1 350px" }}>'
);
updated = updated.replace(
  /<div className="animate-fade-up" style=\{\{\s*flex: '2 1 600px',\s*fontSize: '1\.1rem',\s*lineHeight: '1\.8',\s*color: 'var\(--color-text-body\)',\s*animationDelay: '0\.3s'\s*\}\}>/g,
  '<ScrollReveal direction="right" delay="0.2s" style={{ flex: "2 1 600px", fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text-body)" }}>'
);

// Section 4: Left Content, Right Image
updated = updated.replace(
  /<div className="animate-fade-up" style=\{\{\s*flex: '2 1 600px',\s*fontSize: '1\.1rem',\s*lineHeight: '1\.8',\s*color: 'var\(--color-text-body\)',\s*animationDelay: '0\.4s'\s*\}\}>/g,
  '<ScrollReveal direction="left" delay="0.1s" style={{ flex: "2 1 600px", fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text-body)" }}>'
);
updated = updated.replace(
  /<div className="animate-fade-up" style=\{\{\s*flex: '1 1 350px',\s*animationDelay: '0\.4s'\s*\}\}>/g,
  '<ScrollReveal direction="right" delay="0.2s" style={{ flex: "1 1 350px" }}>'
);

// Section 5: Left Image, Right Content
updated = updated.replace(
  /<div className="animate-fade-up" style=\{\{\s*flex: '1 1 350px',\s*animationDelay: '0\.5s'\s*\}\}>/g,
  '<ScrollReveal direction="left" delay="0.1s" style={{ flex: "1 1 350px" }}>'
);
updated = updated.replace(
  /<div className="animate-fade-up" style=\{\{\s*flex: '2 1 600px',\s*fontSize: '1\.1rem',\s*lineHeight: '1\.8',\s*color: 'var\(--color-text-body\)',\s*animationDelay: '0\.5s'\s*\}\}>/g,
  '<ScrollReveal direction="right" delay="0.2s" style={{ flex: "2 1 600px", fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text-body)" }}>'
);

// Section 6: Left Content, Right Image
updated = updated.replace(
  /<div className="animate-fade-up" style=\{\{\s*flex: '2 1 600px',\s*fontSize: '1\.1rem',\s*lineHeight: '1\.8',\s*color: 'var\(--color-text-body\)',\s*animationDelay: '0\.6s'\s*\}\}>/g,
  '<ScrollReveal direction="left" delay="0.1s" style={{ flex: "2 1 600px", fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text-body)" }}>'
);
updated = updated.replace(
  /<div className="animate-fade-up" style=\{\{\s*flex: '1 1 350px',\s*animationDelay: '0\.6s'\s*\}\}>/g,
  '<ScrollReveal direction="right" delay="0.2s" style={{ flex: "1 1 350px" }}>'
);

// Now we need to close the ScrollReveal tags!
// We can just regex replace the `</div>` that corresponds to these.
// Actually, it's safer to just do a string replace on each exact match if we can, 
// OR just replace `</div>` with `</ScrollReveal>` for the relevant sections.
// But we have nested divs.
// Let's use a simpler approach. I'll just rewrite the file with proper tags.

fs.writeFileSync(filePath, updated);
console.log('Done replacing opening tags.');
