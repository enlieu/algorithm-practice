/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  if (s.length === 0 || s.length === null) return false;
  
  let substr = ''
​
  for (let i = 0; i < s.length - 1; i++) {
    substr += s[i]
    let times = s.length / substr.length
    let validDivision = Number.isInteger(times)
    if (validDivision) {
      if (substr.repeat(times) === s) {
        return true; 
      }
    }
  }
  
  return false
};
