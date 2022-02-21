/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var result;
  var stringOne = firstString.split('').sort().join('').trim();
  var stringTwo = secondString.split('').sort().join('').trim();
  if (stringOne === stringTwo) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
