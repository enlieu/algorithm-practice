/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ''
  }
  
  let prefix = ''
  let maxWordLength = Math.min(...strs.map(str => str.length))
  for (let i = 0; i < maxWordLength; i++) {
    let letter = strs[0][i]
    if (strs.every(str => str[i] === letter)) {
      prefix += letter;
    } else {
      break;
    }
  }
  return prefix;
};
  
  
