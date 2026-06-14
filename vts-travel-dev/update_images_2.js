const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

const destDir = 'public/images/destinations';
const files = fs.readdirSync(destDir);
const aiImages = files.filter(f => f.match(/_[0-9]{13}\.png$/));

const targetFile = './app/components/CategoriesOverlay.jsx';
let content = fs.readFileSync(targetFile, 'utf8');

let replaceCount = 0;
for (let img of aiImages) {
  let namePart = img.replace(/_[0-9]{13}\.png$/, '').replace(/_/g, ' ');
  let regex = /{ name: "([^"]+)", places: "[^"]+", duration: "[^"]+", price: "[^"]+", image: ([^}]+) }/g;
  
  let newContent = content.replace(regex, (match, name, imageStr) => {
    let cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, ' ');
    let cleanMatch = namePart.toLowerCase().replace(/[^a-z0-9]/g, ' ');
    
    if (cleanName.includes(cleanMatch) || cleanMatch.includes(cleanName)) {
      replaceCount++;
      return match.replace(imageStr, '"/images/destinations/' + img + '" ');
    }
    return match;
  });
  content = newContent;
}

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Replaced ' + replaceCount + ' images with AI generated versions.');
