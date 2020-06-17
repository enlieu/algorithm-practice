/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
//   let map = new Map();
//   for (const num of nums) {
//     if (!map.has(num)) {
//       map.set(num, 1)
//     } else {
//       map.set(num, map.get(num) + 1)
//     }
//   }
  
//   console.log(map.keys())
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    let count = 0
    for (let j = 0; j < nums.length; j++)  {
      if (current > nums[j]) {
        count++
      }
    }
    ans.push(count)
  }
  
  return ans;
};