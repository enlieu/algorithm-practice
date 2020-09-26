/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const compare = (a, b) => {
    return `${b}${a}` - `${a}${b}`;
  }
  
  nums.sort(compare)
  
  return !nums[0] ? '0' : nums.join('');
}
