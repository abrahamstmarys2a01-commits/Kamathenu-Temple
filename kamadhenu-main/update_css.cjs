const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'css', 'index.css');
let content = fs.readFileSync(filePath, 'utf8');

const newKeyframes = `
@keyframes slideFromLeft {
  from {
    opacity: 0;
    transform: translateX(-70px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideFromRight {
  from {
    opacity: 0;
    transform: translateX(70px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-from-left {
  animation: slideFromLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.animate-slide-from-right {
  animation: slideFromRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@media (max-width: 768px) {
  @keyframes slideFromLeft {
    from {
      opacity: 0;
      transform: translateX(-40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideFromRight {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
`;

content += newKeyframes;
fs.writeFileSync(filePath, content);
console.log('CSS updated');
