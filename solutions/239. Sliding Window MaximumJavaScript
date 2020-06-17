/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// var maxSlidingWindow = function(nums, k) {
//   let left = 0;
//   let right = 0;
//   let ans = [];
//   let res = [];
  
//   while (right <= nums.length) {
//     right++
//     if (left - right === k) {
//       ans.push
//     }
//   }
  

//   for (let i = 0; i < ans.length; i++) {
//     res.push(Math.max(...ans[i]))
//   }
  
//   return res
// };
var maxSlidingWindow = function(nums, k) {
  let stack = [];
  let ans = [];
  
  //[1,3,-1,-3,5,3,6,7], 3
  
  for (let i = 0; i < nums.length; i++) {
    stack.push(nums[i])
    if (stack.length === k) {
      ans.push(Math.max(...stack))
      stack.shift();
    }
  }
  
  return ans
};

  
//   if (nums.length <= k) {
//     return [Math.max(...nums)];
//   }
//   let ans = [];
//   for (let i = 0; i <= nums.length - k; i++) {
//     let max = -Infinity
//     let slice = nums.slice(i, i + k)
//     ans.push(Math.max(...slice, max))
//   }