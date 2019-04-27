/*
Write a function called "getAllLetters".

Given a word, "getAllLetters" returns an array containing every character in the word. 

Notes:
* If given an empty string, it should return an empty array.

var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
*/

function getAllLetters(str) {
  //use spilt method to transform string into an array of substrtings 
  return str.split('');
}

var output = getAllLetters('astra rai');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']


/*
Note, if you can two words in a string
let str = "astra rai"
str.split(' ')// --> ["astra", "rai"]

str.split('');// --> ["a", "s", "t", "r", "a", " ", "r", "a", "i"]

*/