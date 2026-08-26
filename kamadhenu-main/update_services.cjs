const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Services.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Add ScrollReveal import
if (!content.includes('ScrollReveal')) {
  content = content.replace(
    "import { useLanguage } from '../context/LanguageContext';",
    "import { useLanguage } from '../context/LanguageContext';\nimport ScrollReveal from './ScrollReveal';"
  );
}

// Ensure the wrapper is clean and doesn't conflict
content = content.replace(
  '<div className="featured-card animate-fade-up">',
  '<div className="featured-card">'
);

// Wrap fc-image (left side)
content = content.replace(
  '{onImageClick ? (\n                <div onClick={onImageClick} className="fc-image" style={{ display: \'block\', textDecoration: \'none\', cursor: \'pointer\' }}>',
  '{onImageClick ? (\n                <ScrollReveal direction="left" className="fc-image" style={{ display: \'block\', textDecoration: \'none\', cursor: \'pointer\' }}>\n                  <div onClick={onImageClick}>'
);
content = content.replace(
  '<img src={varahiImg} alt="Varahi Homam" style={{ transition: \'transform 0.3s ease\' }} />\n                </div>',
  '<img src={varahiImg} alt="Varahi Homam" style={{ transition: \'transform 0.3s ease\' }} />\n                  </div>\n                </ScrollReveal>'
);

content = content.replace(
  ') : (\n                <Link to="/pooja-services" className="fc-image" style={{ display: \'block\', textDecoration: \'none\' }}>',
  ') : (\n                <ScrollReveal direction="left" className="fc-image" style={{ display: \'block\', textDecoration: \'none\' }}>\n                  <Link to="/pooja-services" style={{ display: \'block\' }}>'
);
content = content.replace(
  '<img src={varahiImg} alt="Varahi Homam" style={{ transition: \'transform 0.3s ease\' }} />\n                </Link>',
  '<img src={varahiImg} alt="Varahi Homam" style={{ transition: \'transform 0.3s ease\' }} />\n                  </Link>\n                </ScrollReveal>'
);

// Wrap fc-content (right side)
// The fc-content div is currently <div className="fc-content">
content = content.replace(
  '<div className="fc-content">',
  '<ScrollReveal direction="right" className="fc-content">'
);

// Close fc-content ScrollReveal
content = content.replace(
  '</div>\n           </div>\n        </div>\n      </div>\n    </section>',
  '</ScrollReveal>\n           </div>\n        </div>\n      </div>\n    </section>'
);

fs.writeFileSync(filePath, content);
console.log('Services.jsx updated');
