/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let firstHalf = nums.slice(0, n)
  let secondHalf = nums.slice(n)
  
  let ans = []
  
  for (let i = 0; i < firstHalf.length; i++) {
    ans.push(firstHalf[i])
    ans.push(secondHalf[i])
  }
  return ans;
    
};