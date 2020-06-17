/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let hash = {};
  let ans = [];
  
  for (const word of words) {
    if (hash.hasOwnProperty(word)) {
      hash[word]++
    } else {
      hash[word] = 1;
    }
  }
  
  let arr = Object.keys(hash);
  
  
  let sorted = arr.sort((a, b) => {
    let countCompare = hash[b] - hash[a]
    if (countCompare === 0) {
      return a.localeCompare(b)
    } else {
      return countCompare
    }
  })
  

  return sorted.slice(0, k);
};