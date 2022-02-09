/* exported capitalizeWord */
function capitalizeWord(word) {
  var result;
  var string = word.toLowerCase();
  result = string.charAt(0).toUpperCase() + string.slice(1);
  if (result === 'Javascript') {
    result = 'JavaScript';
  }
  return result;
}

//  define function named capitalizedWord with a single parameter "word"
//  assign a variable named "result" with nothing;
//  assign a variable named with "string" with the value of lowercased word
//  re assign result with the vale of the string that's first letter is uppcercased
//  write an if statement to make exception for javascript
