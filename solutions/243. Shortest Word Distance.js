/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
  let word1Idx, word2Idx, difference = Infinity
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    
    if (word === word1) word1Idx = i
    if (word === word2) word2Idx = i
​
    if (word1Idx !== undefined && word2Idx !== undefined) {
      difference = Math.min(difference, Math.abs(word1Idx - word2Idx))
    }
  }
  
  return difference
};
