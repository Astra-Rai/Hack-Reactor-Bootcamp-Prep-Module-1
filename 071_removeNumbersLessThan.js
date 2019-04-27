/*
Write a function called "removeNumbersLessThan".

Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers less than the given number.

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }
*/

//object
var myObj = {
  a: 8,
  b: 2,
  c: 'montana'
};

function removeNumbersLessThan(num, obj) {
  
  //use a for in loop to iterate through object
  
  for (var key in obj) {  
    
      //use and if statement test the value associated with key  
      //if the value is less than num passed through the function...
      
      if (obj[key] < num) { 
    
      //use the delete operator to remove the property from the object
      delete obj[key];  
    
      }
   }
}

removeNumbersLessThan(5, myObj);
console.log(myObj);