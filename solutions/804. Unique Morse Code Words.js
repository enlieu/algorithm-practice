/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let map = new Map();
  
  for (let i = 0; i < alphabet.length; i++) {
    map.set(alphabet[i], morse[i])
  }
  
  let converted = new Set();
  
  for (const word of words) {
    let encoded = ''
    for (let i = 0; i < word.length; i++) {
      encoded += map.get(word[i])
    }
    if (!converted.has(encoded)) converted.add(encoded)
  }
  
  return converted.size
};
