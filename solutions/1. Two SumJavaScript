/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (difference in hash) {
      return [i, hash[difference]]
    } else {
      hash[nums[i]] = i; 
    }
  }
  
};