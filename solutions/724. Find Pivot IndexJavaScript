/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  //sum all nums in array
  //loop through array again, calc leftSum
  //if the total sum - leftSum - curr element === leftSum, you know you have hit pivot point return i
  
  let totalSum = 0
  
  for (const num of nums) {
    totalSum += num
  }
  
  let leftSum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (totalSum - leftSum - nums[i] === leftSum) {
      return i
    }
    leftSum += nums[i]
  }
  
  return -1
};