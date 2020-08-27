/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let substrings = []
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
        substrings.push(s.substring(i, j))  
    }
  }
  
  
  for (const substring of substrings) {
    if (substring === substring.split('').reverse().join('')) {
      count++
    }
  }
  
  return count;
};
