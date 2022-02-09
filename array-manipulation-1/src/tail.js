/* exported tail */
function tail(array) {
  var newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

//  define a function, tail, which take a single parameter, "array"
//  define a variable, newArray, and assign it an empty array
//  define a for loop, to iterate through from the second index of the array
//  in the loop, push the value of array at the index i to the newArray
//  return the value of newArray
