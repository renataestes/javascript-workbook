const carsInReverse = ['Fiat', 'Ford'];
console.log(carsInReverse);

for (let i = 0; i < carsInReverse.length; i++){
  console.log(carsInReverse[i]);
}

const persons = {
firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female"
};

let key;
for (key in persons) {
  console.log(key);
}

for (key in persons) {
  if (key ==='birthDate') {
    console.log(persons['birthDate']);
  }
};


let n = 0;
while (n < 1001) {
  console.log(n);
  n++
};

/*
A "for loop" is better than a "while loop" when you know the exact number of iterations you need to do for a specific problem.

The difference between a for loop and a for...in loop is a for loop is used to iterate through an array and a for..in loop is to iterate over the properties of an object. 

The difference between a while loop and a do...while loop is a while loop keeps going until something rings true. The do...while loop when some sort of task or function needs to be done first before you start running that loop.
