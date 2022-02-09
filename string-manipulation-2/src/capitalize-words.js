/* exported capitalizeWords */
function capitalizeWords(string) {
  var lowerCase = string.toLowerCase();
  var words = lowerCase.split(' ');
  var joined = '';
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    joined = words.join(' ');
  }
  return joined;
}
