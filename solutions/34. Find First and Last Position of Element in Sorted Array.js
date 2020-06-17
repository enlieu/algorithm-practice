/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1
  let foundIndex;
  
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] === target) {
      foundIndex = mid
    }
    
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
    
  }
  
  if (foundIndex === undefined) {
    return [-1, -1]
  }
  
  left = foundIndex 
  right = foundIndex
  
  
  while (nums[left - 1] === target || nums[right + 1] === target) {
    if (nums[left - 1] === target) {
      left--
    }

    if (nums[right + 1] === target) {
      right++
    }
  }
  
  return [left, right]
    
};