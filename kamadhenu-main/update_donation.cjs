const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Donation.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Add ScrollReveal import
if (!content.includes('ScrollReveal')) {
  content = content.replace(
    "import { useLanguage } from '../context/LanguageContext';",
    "import { useLanguage } from '../context/LanguageContext';\nimport ScrollReveal from '../components/ScrollReveal';"
  );
}

// Replace the map rendering
content = content.replace(
  '<div \n              key={index} \n              className="animate-fade-up"',
  '<ScrollReveal key={index} direction="up" alwaysAnimate={true} delay={`${index * 0.1}s`}>\n            <div'
);

// Remove the inline animationDelay
content = content.replace(
  "transition: 'transform 0.3s ease, box-shadow 0.3s ease',\n                animationDelay: `${index * 0.1}s`",
  "transition: 'transform 0.3s ease, box-shadow 0.3s ease'"
);

// Close the ScrollReveal wrapper
content = content.replace(
  '</div>\n          ))}',
  '</div>\n            </ScrollReveal>\n          ))}'
);

fs.writeFileSync(filePath, content);
console.log('Donation.jsx updated');
