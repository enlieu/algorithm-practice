/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let num1 = Math.max(...nums)
  let num1idx = nums.indexOf(num1)
  let removed = nums.splice(num1idx, 1)
  let num2 = Math.max(...nums)
  return (num1-1) * (num2-1)
    
};