/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
  let map = new Map();
  
  for (let i = 0; i < keyboard.length; i++) {
    map.set(keyboard[i], i)
  }
  
  let distance = map.get(word[0])
  
  for (let j = 1; j < word.length; j++) {
    let prev = map.get(word[j-1])
    let curr = map.get(word[j])
    
    distance += Math.abs(prev - curr)
  }
  
  return distance
};
