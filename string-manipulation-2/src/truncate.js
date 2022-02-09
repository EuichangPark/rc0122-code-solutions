/* exported truncate */
function truncate(length, string) {
  var result;
  if (string.length > length) {
    var subStr = string.substring(0, length);
    result = subStr + '...';
  } else {
    result = string + '...';
  }
  return result;
}

//  define a function named truncate with two parameters; "length" and "string"
//  define a variable "result" without a value;
//  define an if statement to check if the length of the string is greater than "length"
//  assign the value of substring method from 0 to length of the string to subStr
//  concatenate ellipsis with subStr and assign it to the result
//  else statement that the result will be string concatenated with ellipsis
//  return the result
