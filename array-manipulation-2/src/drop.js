/* exported drop */
function drop(array, count) {
  var result = [];
  for (let i = count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
