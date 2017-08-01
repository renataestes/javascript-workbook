'use strict';

/*
MASTERMIND

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
for (let i = 0; i < board.length; i++) {
console.log(board[i]);
}
}

- Start game by generating a four-letter code you want the player to guess (generatedCode)

function generatedCode() {
for (let i = 0; i < 4; i++) {
const randomIndex = getRandomInt(0, letters.length);
solution += letters[randomIndex];
}
}

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

-- The player chooses 4 letters (playerCode)

-- They win if they guess the code before using up all of their turns
if (playerCode === generatedCode) {
console.log('You win!');
} else {
console.log('Keep trying');
}

-- The letters are checked to see:
1- if their code matches the generatedCode
2- if any of the letters are correct
(correct letter)
3- if they are also in the correct position
(correct position)
(Use 'loops', probably 'while' so can guess until generatedCode is true; or 'do while' if verifying playerCode and then running through rest of loop if incorrect...will see)

-- Alert the player of how many are the correct letter AND how many are in the correct position

-- The player loses if they use all of their turns and never guess the correct code

- Give 5 chances. Restart game when it's done.

-- Find a way to keep the players previous attempts and the results of those attempts on display
---save their inputs into an array
---show array on the screen
*/

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let generatedCode = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let gameCounter=0;


function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    generatedCode += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function mastermind(guess) {
  if (guess === generatedCode) {
    console.log('You win!');
    return;
  } else {
    console.log('Keep trying');
  }
  generateHint(guess);
}


function generateHint(guess) {
  let gueArray = guess.split('');
  let genArray = generatedCode.split('');
  let counter=0;

  for(let i = 0; i < gueArray.length;i++)
  {
    for(let j=0; j < genArray.length;j++)
    {
      if (gueArray[i]===genArray[j])
        counter+=1;
    }
  }
  console.log('you have '+counter+' correct letters');

  let positionCounter=0;
  if (gueArray[0] === genArray[0]) {
    positionCounter+=1;
  }
  if (gueArray[1] === genArray[1]) {
    positionCounter+=1;
  }
  if (gueArray[2] === genArray[2]) {
    positionCounter+=1;
  }
  if (gueArray[3] === genArray[3]) {
    positionCounter+=1;
  }
  console.log('you have '+positionCounter+' letters in the correct position');
}


function getPrompt() {
  rl.question('guess 4 letters from A through H: ', (guess) => {
    mastermind(guess);
    //put the guesses in array
    board.push(guess);
    printBoard();
    gameCounter+=1;
    if (gameCounter > 10) {
      console.log("GAME OVER!!")
      return;
    }
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  generatedCode = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(generatedCode), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
