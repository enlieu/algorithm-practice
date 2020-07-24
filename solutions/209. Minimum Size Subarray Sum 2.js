/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if (!nums.length) return 0
  
  let left = 0
  let right = 0
  let sum = 0
  let subarrayLength = Infinity;
  
  while (right <= nums.length) {
    if (sum < s) {
      sum += nums[right]
      right++
    } else {
      subarrayLength = Math.min(right - left, subarrayLength)
      sum -= nums[left]
      left++
    }
  }
  
  return subarrayLength !== Infinity ? subarrayLength : 0
};