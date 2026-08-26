const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'PoojaServices.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  // Section 1: Left Image, Right Content
  {
    find: `<ScrollReveal direction="up" delay="0.1s" style={{ flex: '1 1 350px' }}>`,
    replace: `<ScrollReveal direction="left" delay="0.1s" style={{ flex: '1 1 350px' }}>`
  },
  {
    find: `<ScrollReveal direction="up" delay="0.2s" style={{\n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`,
    replace: `<ScrollReveal direction="right" delay="0.2s" style={{\n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`
  },

  // Section 2: Left Content, Right Image
  {
    find: `<ScrollReveal direction="up" delay="0.1s" style={{ \n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`,
    replace: `<ScrollReveal direction="left" delay="0.1s" style={{ \n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`
  },
  {
    find: `<ScrollReveal direction="up" delay="0.2s" style={{ flex: '1 1 350px' }}>`,
    replace: `<ScrollReveal direction="right" delay="0.2s" style={{ flex: '1 1 350px' }}>`
  },

  // Section 3: Left Image, Right Content
  {
    find: `<ScrollReveal direction="up" delay="0.1s" style={{ flex: '1 1 350px' }}>`,
    replace: `<ScrollReveal direction="left" delay="0.1s" style={{ flex: '1 1 350px' }}>`
  },
  {
    find: `<ScrollReveal direction="up" delay="0.2s" style={{\n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`,
    replace: `<ScrollReveal direction="right" delay="0.2s" style={{\n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`
  },

  // Section 4: Left Content, Right Image
  {
    find: `<ScrollReveal direction="up" delay="0.1s" style={{ \n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`,
    replace: `<ScrollReveal direction="left" delay="0.1s" style={{ \n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`
  },
  {
    find: `<ScrollReveal direction="up" delay="0.2s" style={{ flex: '1 1 350px' }}>`,
    replace: `<ScrollReveal direction="right" delay="0.2s" style={{ flex: '1 1 350px' }}>`
  },

  // Section 5: Left Image, Right Content
  {
    find: `<ScrollReveal direction="up" delay="0.1s" style={{ flex: '1 1 350px' }}>`,
    replace: `<ScrollReveal direction="left" delay="0.1s" style={{ flex: '1 1 350px' }}>`
  },
  {
    find: `<ScrollReveal direction="up" delay="0.2s" style={{\n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`,
    replace: `<ScrollReveal direction="right" delay="0.2s" style={{\n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`
  },

  // Section 6: Left Content, Right Image
  {
    find: `<ScrollReveal direction="up" delay="0.1s" style={{ \n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`,
    replace: `<ScrollReveal direction="left" delay="0.1s" style={{ \n              flex: '2 1 600px',\n              fontSize: '1.1rem',\n              lineHeight: '1.8',\n              color: 'var(--color-text-body)'\n            }}>`
  },
  {
    find: `<ScrollReveal direction="up" delay="0.2s" style={{ flex: '1 1 350px' }}>`,
    replace: `<ScrollReveal direction="right" delay="0.2s" style={{ flex: '1 1 350px' }}>`
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
