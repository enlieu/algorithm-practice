/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

var reverseBits = function(n) {
  let change = n.toString(2).split('')
  
  while (change.length < 32) {
    change.unshift('0')
  }
  
  return parseInt(change.reverse().join(''),2)
}
