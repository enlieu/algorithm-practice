/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let iSum = 0;
  let numSum = 0
  
  for (let i = 0; i < nums.length + 1; i++) {
    iSum += i
  }
  
  for (let i = 0; i < nums.length; i++) {
    numSum += nums[i]
  }
  
  return iSum - numSum
    
};