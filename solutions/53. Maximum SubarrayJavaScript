/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSum = nums[0];
  let prevSum = nums[0];
    
for (let i = 1; i < nums.length; i++) {
    if (prevSum < 0) {
      prevSum = nums[i]
    } else {
      prevSum += nums[i];
    }
    maxSum = Math.max(maxSum, prevSum);
  }
  return maxSum;
};