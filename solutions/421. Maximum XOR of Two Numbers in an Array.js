/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaximumXOR = (nums) => {
  let max = -Infinity;
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      max = Math.max(max, nums[i] ^ nums[j]);
    }
  }
  
  return max === -Infinity ? 0 : max;
};
