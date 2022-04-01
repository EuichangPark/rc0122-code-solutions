const fs = require('fs');
const fileContent = Math.random();
fs.writeFile('random.txt', `${fileContent}`, 'utf-8', err => {
  if (err) throw err;
});
