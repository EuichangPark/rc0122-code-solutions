/* exported reverseWords */
function reverseWords(string) {
  var letters = string.split('');
  var array = [];
  for (var i = 0; i < string.length; i++) {
    array.unshift(letters[i]);
  }
  return array.join('').split(' ').reverse().join(' ');
}
