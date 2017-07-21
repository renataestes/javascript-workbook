'use strict';

/**
* pick a random student from this class
*
* store names in a variable- array
*
* generate a random number, less than amount in class
*
* apply the index to the array
*
* from that var, pick a random names
*
* return a name
**/

const studentArray = ['Ryan', 'Renata', 'Trevor']

function randomNumberInRange(top, bottom) {
 return Math.floor(Math.random() * (top - bottom + 1)) + bottom; //The maximum is inclusive and the minimum is inclusive
}

console.log(randomNumberInRange(2,0));

function generateRandomName() {
    const index = randomNumberInRange(studentArray.length -1, 0);
    return studentArray[index];
}

console.log(generateRandomName);
