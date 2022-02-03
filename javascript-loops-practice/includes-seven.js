/* exported includesSeven */
function includesSeven(array) {
  var result = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      result = true;
    }
  }
  return result;
}
