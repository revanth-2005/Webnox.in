const fs = require('fs');
const path = require('path');

const files = ['webnox-logo.png', 'webnox-logo-official.png', 'webnox-center-logo.png', 'Glow Logo.png'];
files.forEach(f => {
  const p = path.join(__dirname, 'public', f);
  if (fs.existsSync(p)) {
    const stats = fs.statSync(p);
    console.log(`${f}: ${stats.size} bytes`);
  } else {
    console.log(`${f} does not exist`);
  }
});
