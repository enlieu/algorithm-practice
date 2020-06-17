/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if (nums.length === 0) return 0;
  let left = 0;
  let right = 0;
  let sum = 0;
  let smol = Infinity;
  while (left < nums.length) {
    if (nums[right] >= s) return 1;
    if (sum < s) {
      if (!nums[right]) break;
      sum += nums[right];
      right++;
    } else {
      smol = Math.min(smol, right - left)
      sum -= nums[left];
      left++;
    }
  }
  if (smol === Infinity) return 0;
  return smol;
};