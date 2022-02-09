/* exported capitalize */
function capitalize(word) {
  const string = word.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//  define a function, capitalize, which take a single parameter, "word"
//  define a variable string, and assign it the value of .toLowerCase() method of word object.
// return the value of toUpperCase of of object string at the first index
// and concatenate it with the value of slice method of string object at index 1
