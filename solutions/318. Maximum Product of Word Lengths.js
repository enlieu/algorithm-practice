/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  let map = new Map();
  
  words = words.sort();
 
  for (const word of words) {
    if (!map.has(word)) {
      map.set(word, new Set(word.split('')))
    }
  }
  
  let maxProduct = 0
  for (let i = 0; i < words.length; i++) {
    let word1 = words[i]
    let word1Letters = map.get(word1)
​
    for (let j = i+1; j < words.length; j++) {
      let word2 = words[j]
      for (let k = 0; k < word2.length; k++) {
        let letter = word2[k]
        if (word1Letters.has(letter)) {
          break;
        }
        if (k === word2.length - 1) {
          maxProduct = Math.max(maxProduct, word1.length * word2.length)
        }
      }
    }
  }
   return maxProduct 
  
};
