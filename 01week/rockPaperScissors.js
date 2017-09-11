'use strict';

/**WHITEBOARDING
If/Else Statements
Player 1 & 2 start game by shaking fist 3 times and revealing selection on the 4th.
If Player 1 rock vs rock = ties
-- Player 1 rock vs paper = loses
-- Player 1 rock vs scissors = wins
-- Player 1 paper vs paper = ties
-- Player 1 paper vs scissors = loses
-- Player 1 paper vs rock = wins
etc etc. List out all combos of results.
...SO...
Test if Player 1 Wins, Test if Player 2 Wins, Test if it's a tie.
If (rock) && (rock > scissors)....
Try Switch statement since you have many options to run through.
How can you test hand 1 and hand 2 simultaneously? As if in real life?
**/

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// MY CODE //
// function rockPaperScissors(hand1, hand2){
//    if (hand1 === 'rock' && hand2 === 'rock') {
//      console.log("It's a tie!");
//    } else if (hand1 === 'paper' && hand2 === 'paper') {
//      console.log("It's a tie!");
//    } else if (hand1 === 'scissors' && hand2 === 'scissors') {
//      console.log("It's a tie!");
//    } else if (hand1 === 'rock' && hand2 === 'rock') {
//      console.log("It's a tie!");
//    } else if (hand1 === 'rock' && hand2 === 'scissors') {
//      console.log("Player 1 wins!");
//    } else if (hand1 === 'rock' && hand2 === 'paper') {
//      console.log("Player 2 wins!");
//    } else if (hand1 === 'paper' && hand2 === 'scissors'){
//      console.log("Player 2 wins!");
//    }
//    return rockPaperScissors();
// }
// console.log(rockPaperScissors('rock', 'scissors'));

//CORRECTIONS
function rockPaperScissors(hand1, hand2) {
  if (hand1 === hand2) {
    return ("It's a tie!");
  } else if (hand1 === 'rock' && hand2 === 'scissors') {
    return ("Player 1 wins!");
  } else if (hand1 === 'rock' && hand2 === 'paper') {
    return ("Player 2 wins!");
  } else if (hand1 === 'paper' && hand2 === 'scissors') {
    return ("Player 2 wins!");
  }
}
rockPaperScissors('rock', 'scissors');


function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
