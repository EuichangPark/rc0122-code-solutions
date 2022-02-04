/* exported numVowels */
function numVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var vowelCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

//  define a function named numVowels with a single parameter "string"
//  assign a new array with the vowels in lowercase and uppercase
//  assign a new variable named vowelCount and the value is 0
//  define a for loop statement that checks every value of the string
//  define a if statement with the condition checking the index of string at i
//  increment 1 as it has a vowel
//  return the vowelCount variable
