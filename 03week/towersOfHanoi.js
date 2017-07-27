'use strict';

//Create three CoRs with arrays
//The first CoR is full
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};
//You click on the first CoR to remove a stack (pop)
//You click on one of the other CoR to add that stack you removed (movePiece)
//~>You must check the CoR to see if there is already a stack there.
(push)function movePiece() {
  if (stacks == null) {
    stacks.pop();
  } else {
    if (last) < (last) {
      alert("Invalid Move");
    } else {
      stacks.push();
      stacks = null;
    }
  }
 //(Compare array values). If there is, you need to check the value of that stack to make sure it is bigger than the one you want to drop.
//You win whenever you get the entire stack on one of the other CoRs (stack.b or stack.c)

var clicker = function() {
  //
  var row = null;
  var m = 0;
  stack.click(function(){
    m = m +1;
    $("#counter").html(m);
    var stack = $(this);
    var children = stack.children();
    var lastChild = children.last();

        if ((stack ='2']).children().length >= 4) || ((stack ='3']).children().length >= 4)
  {
      alert("You Win!!");
    }

  });
}


const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

let first = stacks[0];
console.log(first);

let last = stacks[stacks.length - 1];
console.log(last);

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  if (stacks == null) {
    stacks.pop();
  } else {
    if (last) < (last) {
      alert("Invalid Move");
    } else {
      stacks.push();
      stacks = null;
    }
  }

function isLegal() {
  // Your code here

}

function checkForWin() {
  if (stacks.b.length === 4 || stacks.c.length === 4) {
      console.log("You win");
    }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}


//function towersOfHanoi (startStack, endStack)
//if sourceStack arry.last < targetStack array.last then
//   return true
//  end if
//return false
