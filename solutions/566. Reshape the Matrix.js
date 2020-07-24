/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  const flattened = nums.flat(Infinity)
  
  if (flattened.length !== r * c) {
    return nums;
  } 
  
  let ans = []
  
  while (flattened.length) {
    ans.push(flattened.splice(0, c))
  }
  
  return ans;
  
};