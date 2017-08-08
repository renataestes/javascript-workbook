'use strict';

/*WHITEBOARDING
-Check beginning of word for vowels.
--If word starts with vowel add 'ay' to end of word
--If consonant, split letters
-Append consonants to the end of word
-THEN add 'ay' to the end*/

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//CORRECTIONS
// function split_letters(letters){
//   return (letters.substring(1) + letters.charAt(0) + "ay");
// };
const split_letters = (word) => (word.substring(1)) + word.charAt(0);

const translatePigLatin = (word) => {
  let temp = word;
  for (let i = 0; i < temp.length; i++) {
    const first = temp.charAt(0);
    // console.log(first);
    if (first == "a" || first == "e" || first == "i" || first == "o" || first == "u") {
      return temp + "ay";
    } else {
      temp = split_letters(temp);
    }
  }
};


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( translatePigLatin(answer) );
    getPrompt();
  });
}

// const translatePigLatin = (word) => {
//   if (first == "a" || first == "e" || first == "i" || first == "o" || first == "u")
//   {
//   return word + "yay";
// } else {
//   return split_letters(word);
// };
// translatePigLatin('word');

// function testForVowel(obj) {
//   var arrayVowels = ['a','e','i','o','u'];
//   return (arrayVowels.indexOf(obj) != -1);
// }
// testForVowel(firstLetter)

// function split_letters(letters){
//   return (letters.substring(1) + letters.charAt(0));
// }
// split_letters(word);
//
// function addAy(param) {
//   return param + "ay";
// }
// addAy(word);


// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {
  getPrompt();
};
