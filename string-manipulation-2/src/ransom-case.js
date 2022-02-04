/* exported ransomCase */
function ransomCase(string) {
  var newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      newString += string[i].toUpperCase();
    }
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
