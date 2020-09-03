/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  if (s.length === 0 || s.length === null) return false;
  
  let substr = ''
  let substrs = []
  let firstChar = s[0]
​
  for (let i = 0; i < s.length; i++) {
    if (s[i] === firstChar && substr.length) {
      substrs.push(substr)
    }
    substr += s[i]
  }
  
  for (let i = 0; i < substrs.length; i++) {
    let times = Number.isInteger(s.length / substrs[i].length)
    if (times) {
      if (substrs[i].repeat(s.length / substrs[i].length) === s) {
        return true
      }
    }
  }
  return false
};
