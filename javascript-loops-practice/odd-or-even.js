/* exported oddOrEven */
function oddOrEven(numbers) {
  var array = [];
  var result;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result = 'even';
      array.push(result);
    } else {
      result = 'odd';
      array.push(result);
    }
  }
  return array;
}
