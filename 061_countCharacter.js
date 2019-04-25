/*
Write a function called "countCharacter".

Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
*/

function countCharacter(str, char) {
//placeholder for number of char occurences
var counterForCharOccurrences = 0;
  //use for in statement to interate through the string  
  for(var i in str){
    //use if statement 
    //if a character in str is strictly equal (matches) char...
    //increment the placeholder variable, counterForCharOccurrences, by 1
    
    if(str[i] === char)
    counterForCharOccurrences++;  
 }
    //return the variable, counterForCharOccurrences
 
    return counterForCharOccurrences;
}

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3