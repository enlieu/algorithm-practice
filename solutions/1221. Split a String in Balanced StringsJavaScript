/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let hash = {}
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]]++
    } else {
      hash[s[i]] = 1;
    }
    if (hash['L'] === hash['R']) count++
  }
  return count
};