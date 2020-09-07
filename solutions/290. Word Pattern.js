/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  str = str.split(' ')
  if (str.length !== pattern.length) return false
  
  let map = new Map();
  let seen = new Set();
  
  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i]) && !seen.has(str[i])) {
      map.set(pattern[i], str[i])
      seen.add(str[i])
    }
    if (map.get(pattern[i]) !== str[i]) return false
  }
  
  return true
};
