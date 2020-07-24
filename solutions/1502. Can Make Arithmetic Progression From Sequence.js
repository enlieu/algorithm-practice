/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  
  if (arr.length === 2) return true
  
  let sorted = arr.sort((a, b) => a - b)

  let diff = [];
  
  for (let i = 1; i < sorted.length; i++) {
    diff.push(Math.abs(sorted[i] - sorted[i - 1]))
  }
  
  return diff.every(num => num === diff[0] )
};