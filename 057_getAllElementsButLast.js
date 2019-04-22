/*
Write a function called "getAllElementsButLast".

Given an array, "getAllElementsButLast" returns an array with all the elements but the last.

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]
*/
//array input has four elements

var input = [1, 2, 3, 4];
//function to return all elements of array, excluding last element
//The pop method removes the last element from an array 
function getAllElementsButLast(array) {  
  //remove last element of array, input
  array.pop();
  //return changed array
  return array;
}
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]