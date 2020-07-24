/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let hash = {};
  
  while (n !== 1) {
    n = splitSquareAdd(n)
    if (hash.hasOwnProperty(n)) {
      return false
    }
    hash[n] = true
  }
  return true;
};

const splitSquareAdd = (n) => {
  return n.toString().split('').map((num) => Math.pow(Number(num), 2)).reduce((acc, curr) => acc + curr, 0)
  
}