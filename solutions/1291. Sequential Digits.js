/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  let nums = '123456789'
  let combs = [];
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length + 1; j++) {
      let num = parseInt(nums.substring(i, j))
      if (num >= low && num <= high) {
        combs.push(num)  
      }
    }
  }
  
  return combs.sort((a, b) => a - b)
};
