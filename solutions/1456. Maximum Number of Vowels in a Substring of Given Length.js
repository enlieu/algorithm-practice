/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  let left = 0;
  let right = 0;
  let hash = {'a': true, 'e': true, 'i': true, 'o': true, 'u': true};
  let maxVowels = -Infinity
  let count = 0;
  
  while (right < s.length) {
    if (hash.hasOwnProperty(s[right])) {
      count++
    }
    right++
    
    if (right - left === k) {
      maxVowels = Math.max(count, maxVowels)
      if (hash.hasOwnProperty(s[left])) {
        count--
      }
      left++
    }
  }
  return maxVowels
}