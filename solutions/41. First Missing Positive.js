/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (!nums.includes(1)) return 1
  
  nums = [...new Set(nums.filter((ele) => ele > 0 && ele < nums.length + 1))]
​
  let arr = new Array(nums.length+1).fill(0)
  
  for (const num of nums) {
    arr[num-1] = 1
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) return i + 1
  }
};
