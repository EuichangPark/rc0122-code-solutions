const fs = require('fs');
const fileContent = process.argv[2];
fs.writeFile('note.txt', `${fileContent}`, 'utf-8', err => {
  if (err) throw err;
});
