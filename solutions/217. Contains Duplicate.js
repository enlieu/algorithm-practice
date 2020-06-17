/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let hash = {};
  for (const num of nums) {
    if (hash.hasOwnProperty(num)) {
      return true
    } else {
      hash[num] = true
    }
  }
  return false;
};