/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    let converted = N.toString(2)
  
  let ans = [];
  
  for (let i = 0; i < converted.length; i++) {
    if (converted[i] === '0') {
      ans.push(1)
    } else if (converted[i] === '1') {
      ans.push(0);
    }
  }
  
  let binary = ans.join('')
  return parseInt(binary, 2)
};