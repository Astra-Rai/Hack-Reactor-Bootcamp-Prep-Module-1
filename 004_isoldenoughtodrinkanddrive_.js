//Astra Rai Daniels 
//October 7, 2018
//9:05 PM


/*
Write a function called "isOldEnoughToDrinkAndDrive".
Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States.
Notes:
* The legal drinking age in the United States is 21.
* It is always illegal to drink and drive in the United States.
var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false
*/

function isOldEnoughToDrinkAndDrive(age) {
  // your code here
  if(age < 0 || age > 0){
     return false;
     }else{
      return true;
  }
}

var output = isOldEnoughToDrinkAndDrive(22);
console.log(output);//-->false