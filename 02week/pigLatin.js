'use strict';

/*WHITEBOARDING
-Check beginning of word for vowels.
--If word starts with vowel add 'ay' to end of word
--If consonant, split letters
-Append consonants to the end of word
-THEN add 'ay' to the end
*/

//MY CODE
var word = "renata";
var firstLetter = word.charAt(0);

function testForVowel(obj) {
  var arrayVowels = ['a','e','i','o','u'];
    return (arrayVowels.indexOf(obj) != -1);
}
testForVowel(firstLetter)

function split_letters(letters){
  return (letters.substring(1) + letters.charAt(0));
}
split_letters(word);

function addAy(param) {
   return param + "ay";
}
addAy(word);








const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const translatePigLatin = (word) => {
  if (first == "a" || first == "e" || first == "i" || first == "o" || first == "u")

} else {
  run again;
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

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

}
