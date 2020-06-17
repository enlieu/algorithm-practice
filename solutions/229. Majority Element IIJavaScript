/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let majority = nums.length / 3;
  let hash = {};
  let ans = [];
  
  for (let i = 0 ; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++
    }
  }
  
  for (let key in hash) {
    if (hash[key] > majority) {
      ans.push(key)
    }
  }
  
  return ans;
};