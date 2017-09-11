'use strict'

const partnerObj = {
  firstName: "Renata",
  lastName: "Estes",
  age:27,
  eyeColor: "brown",
  talk: () => {
    return "Hello Renee!"
  },
};

partnerObj.lastName = "cars";
console.log(partnerObj['firstName']);
console.log(partnerObj.lastName);
console.log(partnerObj.talk());

const partnerArr = Object.keys(partnerObj);
console.log(partnerArr);

for (var i in partnerArr){
  console.log(partnerArr[i])
  console.log(partnerObj[partnerArr[i]])
}
