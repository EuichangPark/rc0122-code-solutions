/* exported take */
function take(array, count) {
  var result = [];
  for (let i = 0; i < count; i++) {
    result.push(array[i]);
    if (array.length === 0) {
      result = [];
    }
  }
  return result;
}
