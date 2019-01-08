/*
Write a function called "findShortestOfOfThreeWords".

Given 3 strings, "findShortestOfOfThreeWords" returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

var output = findShortestOfOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
*/

function findShortestOfOfThreeWords(word1, word2, word3) {
  
  //put parameters of function in array so you can loop through the array
  var arrayOfWords = [word1, word2, word3];
  //you have to have something to compare the lengths of the elements in the array to 
  //create a placeholder for comparision to the first element of the array
  var placeholderToCompare = word1;
 //interate through the array using a for in loop 
  for(let i in arrayOfWords) {
    //if the lenght of the element is less than the that of the contents in the placeholder variabe...
    if(arrayOfWords[i].length <placeholderToCompare.length){
      
      //set the variable to that element of the array...and
      placeholderToCompare = arrayOfWords[i];
    } 
    //return the contents of the variable, placeholderToCompare
    //this should be the element with the shortest length in the array
    return placeholderToCompare;
  }
}

var output = findShortestOfOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'