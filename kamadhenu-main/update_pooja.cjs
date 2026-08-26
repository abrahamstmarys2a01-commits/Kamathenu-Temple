const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'PoojaServices.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Add import if missing
if (!content.includes('ScrollReveal')) {
  content = content.replace(
    "import Services from '../components/Services';",
    "import Services from '../components/Services';\nimport ScrollReveal from '../components/ScrollReveal';"
  );
}

// Remove wrapper animation
content = content.replace(
  'className={isHome ? "" : "page-wrapper animate-fade-up"}',
  'className={isHome ? "" : "page-wrapper"}'
);

// We define exact string chunks for opening and closing tags.

const replacements = [
  // Section 1
  {
    find: `<div className="animate-fade-up" style={{ flex: '1 1 350px', animationDelay: '0.1s' }}>`,
    replace: `<ScrollReveal direction="left" delay="0.1s" style={{ flex: '1 1 350px' }}>`
  },
  {
    find: `              />\n            </div>`,
    replace: `              />\n            </ScrollReveal>`
  },
  {
    find: `<div className="animate-fade-up" style={{\n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)',\n              animationDelay: '0.1s'\n            }}>`,
    replace: `<ScrollReveal direction="right" delay="0.2s" style={{\n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`
  },
  {
    find: `              </div>\n            </div>\n          </div>`,
    replace: `              </div>\n            </ScrollReveal>\n          </div>`
  },
  
  // Section 2
  {
    find: `<div className="animate-fade-up" style={{ \n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)',\n              animationDelay: '0.2s'\n            }}>`,
    replace: `<ScrollReveal direction="left" delay="0.1s" style={{ \n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`
  },
  {
    find: `              </ul>\n            </div>`,
    replace: `              </ul>\n            </ScrollReveal>`
  },
  {
    find: `<div className="animate-fade-up" style={{ flex: '1 1 350px', animationDelay: '0.2s' }}>`,
    replace: `<ScrollReveal direction="right" delay="0.2s" style={{ flex: '1 1 350px' }}>`
  },
  {
    find: `              />\n            </div>\n          </div>`,
    replace: `              />\n            </ScrollReveal>\n          </div>`
  },

  // Section 3
  {
    find: `<div className="animate-fade-up" style={{ flex: '1 1 350px', animationDelay: '0.3s' }}>`,
    replace: `<ScrollReveal direction="left" delay="0.1s" style={{ flex: '1 1 350px' }}>`
  },
  {
    find: `              />\n            </div>`,
    replace: `              />\n            </ScrollReveal>`
  },
  {
    find: `<div className="animate-fade-up" style={{\n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)',\n              animationDelay: '0.3s'\n            }}>`,
    replace: `<ScrollReveal direction="right" delay="0.2s" style={{\n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`
  },
  {
    find: `              </div>\n            </div>\n          </div>`,
    replace: `              </div>\n            </ScrollReveal>\n          </div>`
  },

  // Section 4
  {
    find: `<div className="animate-fade-up" style={{ \n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)',\n              animationDelay: '0.4s'\n            }}>`,
    replace: `<ScrollReveal direction="left" delay="0.1s" style={{ \n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`
  },
  {
    find: `              </p>\n            </div>`,
    replace: `              </p>\n            </ScrollReveal>`
  },
  {
    find: `<div className="animate-fade-up" style={{ flex: '1 1 350px', animationDelay: '0.4s' }}>`,
    replace: `<ScrollReveal direction="right" delay="0.2s" style={{ flex: '1 1 350px' }}>`
  },
  {
    find: `              />\n            </div>\n          </div>`,
    replace: `              />\n            </ScrollReveal>\n          </div>`
  },

  // Section 5
  {
    find: `<div className="animate-fade-up" style={{ flex: '1 1 350px', animationDelay: '0.5s' }}>`,
    replace: `<ScrollReveal direction="left" delay="0.1s" style={{ flex: '1 1 350px' }}>`
  },
  {
    find: `              />\n            </div>`,
    replace: `              />\n            </ScrollReveal>`
  },
  {
    find: `<div className="animate-fade-up" style={{\n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)',\n              animationDelay: '0.5s'\n            }}>`,
    replace: `<ScrollReveal direction="right" delay="0.2s" style={{\n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`
  },
  {
    find: `              </ul>\n            </div>\n          </div>`,
    replace: `              </ul>\n            </ScrollReveal>\n          </div>`
  },

  // Section 6
  {
    find: `<div className="animate-fade-up" style={{ \n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)',\n              animationDelay: '0.6s'\n            }}>`,
    replace: `<ScrollReveal direction="left" delay="0.1s" style={{ \n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`
  },
  {
    find: `              </div>\n            </div>`,
    replace: `              </div>\n            </ScrollReveal>`
  },
  {
    find: `<div className="animate-fade-up" style={{ flex: '1 1 350px', animationDelay: '0.6s' }}>`,
    replace: `<ScrollReveal direction="right" delay="0.2s" style={{ flex: '1 1 350px' }}>`
  },
  {
    find: `              />\n            </div>\n          </div>`,
    replace: `              />\n            </ScrollReveal>\n          </div>`
  }
];

let finalContent = content;
replacements.forEach(r => {
  if (finalContent.includes(r.find)) {
    finalContent = finalContent.replace(r.find, r.replace);
  } else {
    console.log("NOT FOUND:\n" + r.find);
  }
});

fs.writeFileSync(filePath, finalContent);
console.log('Update Complete.');
