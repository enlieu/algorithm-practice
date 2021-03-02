/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let max = nums.length;
  let allNums = []
  
  for (let i = 1; i <= max; i++) {
    allNums.push(i)
  }
  
  let nonDuplicated = new Set();
  let res = new Array(2)
  
  for (const num of nums) {
    if (!nonDuplicated.has(num)) {
      nonDuplicated.add(num)
    } else {
      res[0] = num;
    }
  }
  
  res[1] = allNums.filter((num) => !nonDuplicated.has(num))
  
  return res;
};
