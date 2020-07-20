/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let left = 0, right = nums.length - 1, count = 0
  
  for (const num of nums) {
    if (num === val) count++
  }
  
  while (left < right) {
    if (nums[left] === val && nums[right] !== val) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
    if (nums[right] === val) {
      right--
    }
    
    if (nums[left] !== val) {
      left++
    }
  }
  
  for (let i = 0; i < count; i++) {
    nums.pop();
  }
  
  return nums.length
};