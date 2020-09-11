/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let absMax = nums[0]
  let curMax = nums[0]
  let curMin = nums[0]
    
  for (let i = 1; i < nums.length; i++) {
    let temp = curMax;
    curMax = Math.max(curMax*nums[i], curMin*nums[i], nums[i])
    curMin = Math.min(temp*nums[i], curMin*nums[i], nums[i])
    absMax = Math.max(absMax, curMax)
  }
  
  return absMax;
};
​
