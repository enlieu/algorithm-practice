/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let ans = [];
  
  let leftMult = 1
  let rightMult = 1;
  
  for (let i = 0; i < nums.length; i++) {
    ans[i] = leftMult
    leftMult *= nums[i]
  }
  
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= rightMult
    rightMult *= nums[i]
  }
  
  return ans;
};


//   let leftArr = [];
//   let rightArr = [];
//   let ans = [];
  
//   let leftMult = 1
//   for (let i = 0; i < nums.length; i++) {
//     leftArr[i] = leftMult
//     leftMult *= nums[i]  
//   }
  
//   let rightMult = 1;
//   for (let j = nums.length - 1; j >= 0; j--) {
//     rightArr[j] = rightMult;
//     rightMult *= nums[j]
//   }
  
//   for (let k = 0; k < nums.length; k++) {
//     ans.push(rightArr[k] * leftArr[k])
//   }

//   return ans;