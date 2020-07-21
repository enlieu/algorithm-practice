/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map()
  let ans = []
  
  for (const word of strs) {
    let sorted = word.split('').sort().join('')
    if (!map.has(sorted)) {
      map.set(sorted, [])
    }
    map.get(sorted).push(word)
  }
  
  for (const [anagram, words] of map.entries()) {
    ans.push(words)
  }
  
  return ans;
};