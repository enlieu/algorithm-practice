/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let left = 0;
  let right = nums.length - 1
  
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      count++
    }
  }
  
  while (left < right) {
    if (nums[left] === val && nums[right] !== val) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    } 
    
    if (nums[left] !== val) {
      left++
    }
    
     if (nums[right] === val) {
      right--
    }
  }
  
  for (let i = 0; i < count; i++) {
    nums.pop()
  }

  return nums.length
};