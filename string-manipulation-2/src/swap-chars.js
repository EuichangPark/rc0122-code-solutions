/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var stringArray = string.split('');
  var first = stringArray[firstIndex];
  var second = stringArray[secondIndex];
  stringArray[firstIndex] = second;
  stringArray[secondIndex] = first;
  var newString;
  newString = stringArray.join('');
  return newString;
}
