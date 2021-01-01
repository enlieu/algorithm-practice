/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  let map = new Map();
  let unique = 0;
  
  for (const letter of s) {
    map.set(letter, map.get(letter) + 1 || 1)
  }
  
  for (const [letter, freq] of map.entries()) {
    if (freq % 2 === 1) unique += 1
    
    if (unique > 1) return false;
  }
  
  return true;
};
