'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [56, 4, 5, 1, 123, 9];

for (let i = 0; i < 1000; i++) {
  arr.push(getRandomInt(0, 1000));
}

function bubbleSort(arr) {
var len  = arr.length;
for (i=0; i< arr.length; i++){
  if (arr[i] > arr[i + 1]) {
    let temp = arr[i]
    arr[i] = arr[i+1];
    arr[i+1] = temp;
  }
 }
}
bubbleSort(arr);


function mergeSort(arr) {
    if(array.length < 2) {
      return array;
    }

    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);

    return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
  }
  function mergeTopDown(left, right) {
    var array = [];

    while(left.length && right.length) {
      if(left[0] < right[0]) {
        array.push(left.shift());
      } else {
        array.push(right.shift());
      }
    }
    return array.concat(left.slice()).concat(right.slice());
  }
}

function binarySearch(arr, item) {
  // Your code here
}

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
