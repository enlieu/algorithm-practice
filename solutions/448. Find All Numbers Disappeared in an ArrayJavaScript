/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let allNums = {}
  let numArr = [];
  for (let i = 1; i <= nums.length; i++) {
    allNums[i] = false
  }

  for (let i = 0 ; i < nums.length; i++) {
    if (allNums.hasOwnProperty(nums[i])) {
      allNums[nums[i]] = true
    }
  }
  
  
  for (let num in allNums) {
    if (allNums[num] === false) numArr.push(num)
  }
  
  return numArr
};