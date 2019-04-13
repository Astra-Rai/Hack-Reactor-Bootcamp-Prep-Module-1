/*
Write a function called "getElementsAfter".

Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
*/
//Notes on slice() method:

//The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

//Splice syntax: 
//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

/*
-Start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.
-deleteCount Optional
An integer indicating the number of old array elements to remove.
If deleteCount is omitted, or if its value is larger than array.length - start (that is, if it is greater than the number of elements left in the array, starting at start), then all of the elements from start through the end of the array will be deleted.
-If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).
item1, item2, ... Optional
-(Resource, MDN)
*/
function getElementsAfter(array, n) {
  return array.splice(n+1);
  //given an index to start at, increase by 1
  //n + 1
  //n is set to 2
  //n + 2, is the second index, plus 1
  //therefore start of index is at 3 not 2  
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']