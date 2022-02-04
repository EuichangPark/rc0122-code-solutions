/* exported takeRight */
function takeRight(array, count) {
  const newArray = [];
  var result;
  for (let i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
    result = newArray;
    if (count > array.length) {
      result = array;
    }
  }
  return result;
}
