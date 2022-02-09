/* exported includes */
function includes(array, value) {
  var result = false;
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      result = true;
    }
  }
  return result;
}
