/* exported findIndex */
function findIndex(array, value) {
  var result = -1;
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      result = i;
      break;
    }
  }
  return result;
}
