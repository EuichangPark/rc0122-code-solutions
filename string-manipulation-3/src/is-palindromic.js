/* exported isPalindromic */

function isPalindromic(string) {
  var result;
  var newString = string.split(' ').join('');
  var newStringSplit = newString.split('');
  var newStringReverse = newStringSplit.reverse();
  var newStringReverseJoin = newStringReverse.join('');
  if (newString === newStringReverseJoin) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
