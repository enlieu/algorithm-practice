/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let hash = {};
  let ans = [];
  
  for (const int of nums) {
    if (hash.hasOwnProperty(int)) {
      hash[int]++
    } else {
      hash[int] = 1;
    }
  }
  
  
  let arr = Object.entries(hash);
  
  let sorted = arr.sort((a, b) =>  b[1] - a[1]);
  
  for (let i = 0; i < k; i++) {
    ans.push(sorted[i][0])
  }
  
  return ans;
  
};