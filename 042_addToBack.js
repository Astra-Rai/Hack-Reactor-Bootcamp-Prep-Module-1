/*
Write a function called "addToBack".
Given an array and an element, "addToBack" returns the given array with the given element added to the end.
Note: It should be the SAME array, not a new array.
var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]
*/

function addToBack(arr, element) {
  //use array method to add element to end of array
  return arr.push(element); 
  //return the array with the added element at the end
}

var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]