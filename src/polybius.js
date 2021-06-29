// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  //Set arrays that we're going to use in our function
  const alphabet = [
    'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p',
    'q', 'r', 's', 't',
    'u', 'v', 'w', 'x',
    'y', 'z']

  const decodedAlpha = [
    'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h',
    '(i/j)', 'k', 'l',
    'm', 'n', 'o', 'p',
    'q', 'r', 's', 't',
    'u', 'v', 'w', 'x',
    'y', 'z']

  const encodePoly = [
      '11', '21', '31', '41', '51',
      '12', '22', '32', '42', '42', '52',
      '13', '23', '33', '43', '53',
      '14', '24', '34', '44', '54',
      '15', '25', '35', '45', '55']

  const decodePoly = [
    '11', '21', '31', '41', '51',
    '12', '22', '32', '42', '52',
    '13', '23', '33', '43', '53',
    '14', '24', '34', '44', '54',
    '15', '25', '35', '45', '55'
  ]


  function polybius(input, encode = true) {
    // your solution code here
    //Check if decoding
    if (!encode) {
      //If so set variable to split our input into array
       let code = input.split(' ');
       //Loop through our code array
       for (let i = 0; i < code.length; i++) {
         //Check to see if the length of our array is odd, if so, return false
          if(code[i].length % 2 !== 0) return false;
       }
       //If our array is even decode the polybius
        return _decode(input)
        //Encode the input provided by the user
    } else return _encode(input)
  }
      //Helper function that encodes the input of a user
      function _encode(input) {
        //Spread the indexes of our input into an array
        let encoder = [...input.toLowerCase()]
        //Use reduce so that our accumulator holds the letters within our array
          return encoder.reduce((acc, letter) => {
            //CHeck to see if the inputs match the letters in our alphabet array
            if (alphabet.includes(letter)) {
              //If included put the index of that letter next to the array for our encoded numbers
              acc += encodePoly[alphabet.indexOf(letter)]
            } else {
              //If it's a space, still include it.
              acc += letter
            }
            //Return our encoded string
            return acc;
          }, "")
    }
    //Helper function that helps decode using the polybius table
    function _decode(input) {
      //Set an empty array
      let result = [];
      //Split the input into an array
      let splitPoly = input.split(' ')
      //loop through the new split polybius array
      for (let i = 0; i < splitPoly.length; i++) {

        //Using a regular expression to match our looped array to our polybius table array
        let letters = splitPoly[i].match(/.{1,2}/g);
        //Set an empty string
        let decodedWord = '';
        //Loop through that regular expression
        for(let j = 0; j < letters.length; j++)  {
          //take our empty string and add the decoded letters with the index of the letter we were looking for
          decodedWord += decodedAlpha[decodePoly.indexOf(letters[j])]
        }
        //Push our resulting words into our empty array.
        result.push(decodedWord);
      }
      //Return that array as a string.
      return result.join(' ')
    }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
