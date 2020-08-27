/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (!nums.length) return 0;
  
  let len = 1;
  let maxLen = 1;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i-1] < nums[i]) {
      len += 1;
      maxLen = Math.max(len, maxLen)
    } else {
      len = 1;
    }
  }
  
  return maxLen
};
