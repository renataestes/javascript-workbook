'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];
const len = arr.length;

for (let i = 0; i < 1000; i++) {
  arr.push(getRandomInt(0, 1000));
}

function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}
console.log(bubbleSort(arr));


function mergeSort(arr) {
  const len = arr.length;
  if(len <2) {
    return arr;
}

let arr = [4, 10, 53, 6, 88, 27, 1, 96]
const len = arr.length;
const mid = Math.floor(len/2);
const left = arr.slice(0,mid);
const right =arr.slice(mid, len);

function mergeSort(arr) {
  if(len <=1) {
    return arr;
}
 //return mergeSort(left, right);
}
console.log(mergeSort(arr));

function mergeBothSides(left, right) {
    //while(left.len && right.len) {
      if(left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    //}
    return arr.concat(left.slice()).concat(right.slice());
  }
console.log(mergeBothSides(left, right));


//https://www.nczonline.net/blog/2009/09/01/computer-science-in-javascript-binary-search/
//If middle equals value, you’re done.
//If value is less than middle, go left.
//If value is greater than middle, go right.
//defintely do not continue if value doesnt exist (happens when start and last indexes are equal)
function binarySearch(value){
    const firstIndex = 0,
    const lastIndex = arr.length - 1,
    const middle = Math.floor((firstIndex + lastIndex)/2);

    while(middle != value && firstIndex < lastIndex){
        if (value < middle){
            lastIndex = middle - 1;
        } else if (value > middle){
            firstIndex = middle + 1;
        }
        middle = Math.floor((firstIndex + lastIndex)/2);
    }
    return (middle != value && firstIndex = lastIndex);
}
binarySearch(8);

// Tests

if (typeof describe === 'function') {

  function comparator(a, b) {
    if (Number(a) < Number(b)) return -1;
    if (Number(a) > Number(b)) return 1;
    return 0;
  }

  describe('#bubbleSort()', () => {
    it('should sort array', () => {
      const sorted = bubbleSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#mergeSort()', () => {
    it('should sort array', () => {
      const sorted = mergeSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#binarySearch()', () => {
    it('should return the index of given item if sorted array contains it', () => {
      const idx = binarySearch([1, 2, 3, 4], 3);
      assert.equal(idx, 2);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });

} else {

  console.log('Run the tests!')

}
