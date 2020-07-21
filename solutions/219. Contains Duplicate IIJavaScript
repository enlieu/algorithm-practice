/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let map = new Map();
  let diffs = []
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], [])
    }
    map.get(nums[i]).push(i)
  }
  
  for (let [num, freq] of map.entries()) {
    if (freq.length > 1) {
      diffs.push(freq)
    }
  }
  
  let minDiff = Infinity
  for (let i = 0; i < diffs.length; i++) {
    for (let j = 1; j < diffs[i].length; j++) {
      minDiff = Math.min(minDiff, diffs[i][j] - diffs[i][j - 1])
      if (minDiff <= k) return true
    }
  }
  
  return false;
};



