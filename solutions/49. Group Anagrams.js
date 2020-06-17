/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {}
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i]
    let sortedWord = word.split('').sort().join('')
    console.log(sortedWord)
    if (!map[sortedWord]) {
      map[sortedWord] = [word]
    } else {
      map[sortedWord].push(word);
    }
  }
  return Object.values(map);
};