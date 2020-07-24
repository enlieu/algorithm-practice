/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let lower = licensePlate.toLowerCase()
  let letters = []
  
  for (const letter of lower) {
    if (alphabet.includes(letter)) {
      letters.push(letter)
    }
  }
  
  let map = new Map();
  
  for (const letter of letters) {
    if (!map.has(letter)) {
      map.set(letter, 1)
    } else {
      map.set(letter, map.get(letter) + 1)
    }
  }
  
  let ans = [];
  
  for (const word of words) {
    let mapCopy = new Map(map)
    for (const letter of word) {
      if (mapCopy.has(letter)) {
        mapCopy.set(letter, mapCopy.get(letter) - 1)
      }
    }
    if ([...mapCopy.values()].every((num) => num <= 0)) {
      ans.push(word)
    }
  }
  
  return ans.sort((a, b) => a.length - b.length)[0]
};