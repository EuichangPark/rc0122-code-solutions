/* exported isLowerCased */
function isLowerCased(word) {
  var result = false;
  if (word.toLowerCase() === word) {
    result = true;
  }
  return result;
}
