/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  let sorted = arr.sort((a, b) => a - b)
  let min = Infinity
  let ans = [];
  for (let i = 1; i < sorted.length; i++) {
    min = Math.min(min, Math.abs(sorted[i] - sorted[i - 1]))
  }
  
  
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] === min) {
      ans.push([sorted[i - 1], sorted[i]])
    }
  }
  
  return ans;
};