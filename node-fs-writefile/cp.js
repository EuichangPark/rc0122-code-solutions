const fs = require('fs');
const writeFile = process.argv[3];
fs.readFile(`${process.argv[2]}`, 'utf-8', (err, data) => {
  if (err) throw err;
  fs.writeFile(`${writeFile}`, data + '\n', 'utf-8', err => {
    if (err) throw err;
  });
});
