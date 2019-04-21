/*
Write a function called "getElementsUpTo".

Given an array and a index, "getElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index.
Notes:
* In order to do this you should be familiar with the 'slice' method.

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
*/
function getElementsUpTo(array, n) {

//start at index 3, d
//delete two elements starting with element at index d

array.splice(n,2);
return array;  
//index 0, a
//index 1, b  
//index 2, c 
//index 3, d  
//index 4, e
}
var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']