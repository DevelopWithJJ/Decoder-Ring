// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (() => {
  //Set variable for the normal alphabet
  const NORMAL_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  //setup helper function to check if
  //string has all unique inputs
  function _isUnique(input) {
    //Set object that splits our string to an array
    //Then reduce that array
    const obj = input.split('').reduce((acc, char) => {
      //Set acc and character to be true
      acc[char] = true;
      //Return what our accumulator is holding so that
      //it's true
      return acc;
      //Reduce into an empty object
    }, {});
    //Match the length of our keys to our input 
    return Object.keys(obj).length === input.length;
  }
  //Function that executes a substitution cipher
  function substitution(input, alphabet, encode = true) {
    //Your solution code here:
    //If no alphabet or length of alphabet not 26 return false
    if (!alphabet || alphabet.length !== 26) return false;
    //If alphabet does not have all unique characters return false
    if (!_isUnique(alphabet)) return false;
    //Set up destructured variable that checks if encode true/false
    //If true normal_alphabet => alphabet
    //If false alphabet => normal_alphabet
    const [main, secondary] = 
    encode 
    ? [NORMAL_ALPHABET, alphabet] 
    : [alphabet, NORMAL_ALPHABET];
    //Set variable key that splits main and reduces
    //Accumulator holds the letter and it's index
    const key = main.split('').reduce((acc, letter, index) => {
      //Set accumulator and it's letter = secondary and
      //it's index
        acc[letter] = secondary[index];
      //return our values
        return acc;
      },//Reduce into object that has key and a value
      { ' ': ' ' }
    );
    //Return our input
    return input
    //For that input set to lowercase
      .toLowerCase()
    //Split that input into array
      .split('')
    //map that array by letter to key with letter
      .map((letter) => key[letter])
    //Join our array into a string
      .join('');
  }
  return { substitution };
})();
module.exports = { substitution: substitutionModule.substitution };
