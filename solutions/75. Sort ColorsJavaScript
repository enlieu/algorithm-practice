/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let numsHash = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (!numsHash.hasOwnProperty(nums[i])) {
      numsHash[nums[i]] = 1
    } else {
      numsHash[nums[i]]++
    }
  }
  
  let pointer = 0;
  
  for (let i = 0; i < numsHash[0]; i++) {
    nums[pointer] = 0
    pointer++
  }
  
  for (let i = 0; i < numsHash[1]; i++) {
    nums[pointer] = 1
    pointer++
  }
  
    
  for (let i = 0; i < numsHash[2]; i++) {
    nums[pointer] = 2
    pointer++
  }
  return nums;
  
  //   let zeroEnd = numsHash[0]
//   let oneEnd = zeroEnd + numsHash[1]
//   let twoEnd = oneEnd + numsHash[2]
  
//   for (let i = 0; i < nums.length; i++) {
//     if (i < zeroEnd) {
//       nums[i] = 0
//     } else if (i <= oneEnd) {
//       nums[i] = 1
//     } else if (i <= twoEnd) {
//       nums[i] = 2
//     }
  // }
  
  // let zeroes = new Array(numsHash[0]).fill(0)
  // let ones = new Array(numsHash[1]).fill(1)
  // let twos = new Array(numsHash[2]).fill(2)
  // nums[0] = zeroes
  // console.log([...zeroes, ...ones, ...twos])
};