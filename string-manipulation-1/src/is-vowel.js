/* exported isVowel */
function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var result = false;
  for (var i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      result = true;
    }
  }
  return result;
}
