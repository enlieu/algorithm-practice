/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let ans = [];
    for (let i = 0; i < address.length; i++) {
      address[i] === '.' ? ans.push('[.]') : ans.push(address[i])
    }
  return ans.join('')
};