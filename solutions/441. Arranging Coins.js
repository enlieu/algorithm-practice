/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let i = 1
  let rows = 0
  
  while(n - i >= 0) {
    n -= i
    i += 1
    rows++
  }
  return rows; 
};