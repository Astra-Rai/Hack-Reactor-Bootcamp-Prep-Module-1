/*
Write a function called "getAllElementsButFirst".

Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]
*/

//array used to be passed through function getAllElementsBut first array

//declare an array 
var input = [1, 2, 3, 4];

function getAllElementsButFirst(array) {
  //array.splice method used to delete element in array
  //splice method start parameter is at 0 index, which element is  1
  //splice method delete parameter is 1, we're deleting one element, 
  //line below reads "given an arraydelete one element, starting with index 0,"
  
  array.splice(0, 1);
  
  //return array with deleted first element
  return array;

}

//input variable passed a argument through function getAllElementsButFirst
//the result of passing the array
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]