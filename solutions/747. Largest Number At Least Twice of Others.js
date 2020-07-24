/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let largest = -Infinity
  
  for (let i = 0; i < nums.length; i++) {
    largest = Math.max(largest, nums[i])
  }
  
  let largestIdx = nums.indexOf(largest)
  
  nums.splice(largestIdx, 1)
  
  return nums.every((num) => largest >= num * 2) ? largestIdx : -1
};