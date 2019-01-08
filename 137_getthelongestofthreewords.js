/*
Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words. 

Notes:
* If there is a tie, it should return the first word in the tie.

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
*/

function getLongestOfThreeWords(word1, word2, word3) {
  // create an array with the three parameters as elements
  
  var arrayOfWords = [word1, word2, word3];
  //use a for in loop to interate through each element of the array
  var longestString = word1;
  for(let i in arrayOfWords){
  //if the element length is more than the length of the current place holder sttring length...   
    
   if(arrayOfWords[i].length > longestString.length){
  //set tha element to be the placehold of the variable longest string     
     longestString = arrayOfWords[i];
     
  }
}
  // return the variable longestString
    return longestString;  
}
var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'