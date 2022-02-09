/* exported isUpperCased */

function isUpperCased(word) {
  var result = false;
  if (word.toUpperCase() === word) {
    result = true;
  }
  return result;
}

//  define a function, isUpperCased with one parameter "word"
//  define a variable, result, and assign it a boolean value of false
//  if statement for the expression of uppercased word with the word
//  assign the boolean value of true to variable result
//  return the value of result
