/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let lower = 'abcdefghijklmnopqrestuvwxyz'
  let upper = 'ABCDEFGHIJKLMNOPQRESTUVWXYZ'
  let convert = {};
  let res = '';
  
  for (let i = 0; i < upper.length; i++) {
    convert[upper[i]] = lower[i]
  }
  
  for (const letter of str) {
    if (convert[letter]) {
      res += convert[letter]
    } else {
      res += letter
    }
  }
  
  return res
};
