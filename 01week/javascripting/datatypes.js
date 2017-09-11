'use strict';

/**
- write a function for current date and time
- wite a function to convert a number to a string
- write a function to convert a string to a number
- write a function that takes in different datatypes and prints out what they are
- write a function that adds 2 numbers together
- write a function that only runs when 2 things are true
- write a function that runs when 1 of 2 things are true
- write a function when both things are NOT true
**/

//Current Date & Time

//function returnDate() {
  //return new Date;
//}
//console.log(returnDate());
const returnDate = () => new Date;
console.log(returnDate());


//Convert # to String

// function numToString(x) {
//   return x.toString();
// }
// numToString(17);
const numToString = (x) => x.toString();
numToString(17);


//Convert a String to #

// function stringToNum(x) {
//   return parseInt(x);
// }
// stringToNum('5');
const stringToNum = (x) => parseInt(x);
stringToNum('5');


//Different datatypes

// function typeOf(datatype) {
//   return typeof datatype;
// }
const typeOf = (datatype) => typeof datatype;
console.log(typeof false);
console.log(typeof null);
console.log(typeof myLife);
console.log(typeof 1.08);
console.log(typeof NaN);
console.log(typeof "I love JS!");
typeOf(5);


//Add 2 #s

// function addition(x, y) {
//   console.log(x + y);
//   return x + y;
// }
// addition(5,5);
const addition = (x, y) => (x + y);
addition(5,5);


//Two things are true

// function theTruth() {
//   if (9 > 8 && 8 > 7) {
//     console.log("Numbers never lie!");
//     return true;
// } else {
//     console.log("Numbers aren't the source of truth.");
//     return false;
// }
// }
// theTruth();
const twoNumbers = (numOne, numTwo) => {
  if (numOne%numTwo===0) {
    return true;
  }
}
twoNumbers(10, 5);


//One of two things are true
const theTruth = (arg1,arg2) => {
  if (9 > 8 || 9 > 10) {
    return true;
  } else {
    return false;
  }
}
theTruth();


//Both not true
// function theTruth() {
//   if (9 === 8 && 8 === 7) {
//     console.log("Numbers never lie!");
//     return true;
// } else {
//     console.log("Numbers aren't the source of truth after all.");
//     return false;
// }
// }
// theTruth();
const noTruth = (num1,num2) => {
  if (num1 + num2 === 'string') {
    return true;
  } else {
    return false;
  }
}
noTruth(3, 4);
