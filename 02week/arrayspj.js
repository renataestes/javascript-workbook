'use strict'

//length
let cars = ['Ford','Toyota','Cadillac','Hyundai'];
console.log(cars.length);

//concat
let moreCars = ['Aston Martin','Bugatti','Bentley','Honda'];
let totalCars = cars.concat(moreCars);
console.log(totalCars);

//indexOf
console.log(totalCars.indexOf("Honda"));

//lastIndexOf
console.log(totalCars.lastIndexOf("Ford"));

//join
let stringOfCars = totalCars.join(',');
console.log(stringOfCars);

//split
totalCars = stringOfCars.split(',');
console.log(totalCars);

//reverse
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

//sort
carsInReverse.sort();
alert(carsInReverse.indexOf('Aston Martin'));
console.log(carsInReverse);

//slice
let removedCars = carsInReverse.slice(4, 6);
console.log(removedCars);

//splice
carsInReverse.splice(1, 1, 'Ford');
carsInReverse.splice(2, 1, 'Honda');
console.log(carsInReverse);

//push
carsInReverse.push('Ford', 'Honda');
console.log(carsInReverse);

//pop
carsInReverse.pop();
console.log(carsInReverse);

//shift
carsInReverse.shift();
console.log(carsInReverse);

//unshift
carsInReverse.unshift("Subaru");
console.log(carsInReverse);

//forEach
var numbers = [23, 45, 0, 2];
function addTwo(item) {
  console.log(item + 2);
}
numbers.forEach(addTwo)
