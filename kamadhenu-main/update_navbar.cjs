const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Navbar.jsx');
let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes('activeSection')) {
  content = content.replace(
    "import React, { useState } from 'react';",
    "import React, { useState, useEffect } from 'react';\nimport { useLocation } from 'react-router-dom';"
  );
  
  const stateHooks = `  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { openBooking } = useBooking();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // If we are on a specific page, set that as active immediately
    if (location.pathname === '/pooja-services' || location.pathname === '/yagam-services') {
      setActiveSection('pooja-services');
      return;
    } else if (location.pathname === '/donation') {
      setActiveSection('donation');
      return;
    } else if (location.pathname === '/contact') {
      setActiveSection('contact');
      return;
    }

    // Otherwise, we are likely on Home, track scroll
    const handleScroll = () => {
      const sections = ['home', 'pooja-services', 'donation', 'contact'];
      let currentSection = 'home'; // default

      // We add a top offset to trigger earlier when scrolling down
      const scrollPosition = window.scrollY + 150; 

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);`;

  content = content.replace(
    /  const \[isMobileMenuOpen, setIsMobileMenuOpen\] = useState\(false\);\n  const \{ language, toggleLanguage \} = useLanguage\(\);\n  const \{ openBooking \} = useBooking\(\);/g,
    stateHooks
  );

  // Now replace the li links
  const ulRegex = /<ul className="nav-links">[\s\S]*?<\/ul>/;
  const newUl = `<ul className="nav-links">
            <li><Link to="/" className={\`nav-link \${activeSection === 'home' ? 'active' : ''}\`} onClick={() => setIsMobileMenuOpen(false)}>{language === 'ta' ? 'முகப்பு' : 'Home'}</Link></li>
            <li><Link to="/#pooja-services" className={\`nav-link \${activeSection === 'pooja-services' ? 'active' : ''}\`} onClick={() => setIsMobileMenuOpen(false)}>{language === 'ta' ? 'பூஜைகள்' : 'Pooja Services'}</Link></li>
            <li><Link to="/#donation" className={\`nav-link \${activeSection === 'donation' ? 'active' : ''}\`} onClick={() => setIsMobileMenuOpen(false)}>{language === 'ta' ? 'நன்கொடை' : 'Donation'}</Link></li>
            <li><Link to="/#contact" className={\`nav-link \${activeSection === 'contact' ? 'active' : ''}\`} onClick={() => setIsMobileMenuOpen(false)}>{language === 'ta' ? 'தொடர்பு' : 'Contact Us'}</Link></li>
          </ul>`;
          
  content = content.replace(ulRegex, newUl);

  fs.writeFileSync(filePath, content);
  console.log('Navbar updated');
} else {
  console.log('Already updated');
}
