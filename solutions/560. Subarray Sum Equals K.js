/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let map = new Map();
  let sum = 0;
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    map.set(sum, map.get(sum) + 1 || 1)
    sum += nums[i]
    if (map.has(sum - k)) count += map.get(sum - k)
  }
  
  return count
};
