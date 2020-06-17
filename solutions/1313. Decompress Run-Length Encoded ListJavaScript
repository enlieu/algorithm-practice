/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  let ans = []
  for (let i = 0; i <= nums.length - 2; i+=2){
    let arr = new Array(nums[i]).fill(nums[i+1])
    ans.push(...arr)
  }
  return ans
  
};