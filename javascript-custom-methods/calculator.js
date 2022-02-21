/* exported calculator */
var calculator = {
  add: function (x, y) {
    var sum = x + y;
    return sum;
  },
  subtract: function (x, y) {
    var subtraction = x - y;
    return subtraction;
  },
  multiply: function (x, y) {
    var multiply = x * y;
    return multiply;
  },
  divide: function (x, y) {
    var quotient = x / y;
    return quotient;
  },
  square: function (x) {
    var square = x * x;
    return square;
  },
  sumAll: function (numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },
  getAverage: function (numbers) {
    var total = 0;
    var average;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
      average = total / numbers.length;
    }
    return average;
  }
};
