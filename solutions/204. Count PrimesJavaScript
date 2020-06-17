/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let allNums = new Array(n).fill(true)
  allNums[0] = false
  allNums[1] = false
  let count = 0;
    for (let i = 2; i * i < allNums.length; i++) {
    if (allNums[i] === true) {
      for (let j = i; j * i < allNums.length; j++) {
        allNums[i*j] = false
      }
    }
  }

  allNums.forEach((bool) => {
    if (bool) count++
  })

  
  return count;

};