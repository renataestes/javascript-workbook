'use strict';

//Horizontal Win [0,1,2], [3,4,5], [6,7,8]
// Vertical Win: [0,3,6], [1,4,7], [2,5,8]
// Diagonal Win: [0,4,8], [0,2,6]
// Only way to win is if the total is 0 or if the total is 3. X are worth 1 point and O are worth 0 points

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

// Horizontal Win: [0,1,2], [3,4,5], [6,7,8]
function horizontalWin() {
  if ('a win in a row') {
      [ { x: 0, o: 6 }, { x: 1, o: 7 }, { x: 2, o: 8 }] || [ { x: 3, o: 0 }, { x: 4, o: 1 }, { x: 5, o: 2 }] || [ { x: 6, o: 3 }, { x: 7, o: 4 }, { x: 8, o: 5 }] {
        
      });
      return ('player " " wins!');
    });

// Vertical Win: [0,3,6], [1,4,7], [2,5,8]
function verticalWin() {
  if ('a win in a column') {
    [ { x: 0, o: 1 }, { x: 3, o: 4 }, { x: 6, o: 7 }] || [ { x: 2, o: 0 }, { x: 5, o: 3 }, { x: 8, o: 6 }] || [ { x: 1, o: 2 }, { x: 4, o: 5 }, { x: 7, o: 8 }] {

    });
    return ('player " " wins!');
  });

// Diagonal Win: [0,4,8], [2,4,6]
function diagonalWin() {
  if ('a win diagonally') {
    [ { x: 0, o: 2 }, { x: 4, o: 4 }, { x: 8, o: 6 }] || [ { x: 2, o: 0 }, { x: 4, o: 4 }, { x: 6, o: 8 }]

  });
  return ('player " " wins!');
});

function checkForWin() {
  // Your code here
}

function ticTacToe(row, column) {
  // Your code here
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
