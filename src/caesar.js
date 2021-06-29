// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    //Check shift to make sure it is >-25, not 0, <25 and present
    //Set letters in input to lowercase, since function is case-insensitive
    //Set conditional:
    //If encode = true encode, if encode = false decode
    //Set each letter in the alphabet to index in array
    //Loop through our input 
    //Give a value for the shift
    if(shift < -25 || shift > 25 || shift === 0 || !shift) return false
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
    'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      let code  = input.toLowerCase().split('');
      return code.map((x) => {
        if(alphabet.includes(x)){
          let i
          if(encode) {
            i = alphabet.indexOf(x) + shift
        } else {
            i = alphabet.indexOf(x) - shift
        } if(i < 0) {
            i += 26
        } else if(i > 25) {
            i -= 26
        } return alphabet[i]
      } else return x
      }).join('')    
  }

  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
