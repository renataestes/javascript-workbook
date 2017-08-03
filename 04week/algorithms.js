'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];
const len = arr.length;

for (let i = 0; i < 10; i++) {
  arr.push(getRandomInt(0, 1000));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
let arr = [];
const len = arr.length;

for (let i = 0; i < 10; i++) {
  arr.push(getRandomInt(0, 1000));
}

function bubbleSort(arr){
  let len = arr.length;
  for (let i = len-1; i>=0; i--){
    for(let j = 1; j<=i; j++){
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

function mergeSort(arr){
  var len = arr.length;
  if(len <2)
  return arr;
  var mid = Math.floor(len/2),
  left = arr.slice(0,mid),
  right =arr.slice(mid);
  //send left and right to the mergeSort to broke it down into pieces
  //then merge those
  return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
  var result = [],
  lLen = left.length,
  rLen = right.length,
  l = 0,
  r = 0;
  while(l < lLen && r < rLen){
    if(left[l] < right[r]){
      result.push(left[l]);
      l++;
    }
    else{
      result.push(right[r]);
      r++;
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSort(arr));

let arrSorted = mergeSort(arr);

function binarySearch(arr, value){
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  let middle = Math.floor((firstIndex + lastIndex)/2);

  while(arr[middle] != value && firstIndex < lastIndex){
    if (value < arr[middle]){
      lastIndex = middle - 1;
    } else if (value > arr[middle]){
      firstIndex = middle + 1;
    }
    middle = Math.floor((firstIndex + lastIndex)/2);
  }
  if (arr[middle] != value) {
    return false;
  } else {
    return true;
  }
}
console.log(arrSorted);
console.log(binarySearch(arrSorted, 4));

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
