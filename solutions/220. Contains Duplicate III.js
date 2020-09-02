/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  //input is an array
  //k is the Math.abs difference between two elements
  //t is the index difference between two elements
  //brute force way would be to double for loop through the numbers, checking for both conditions
  //how to optimize using a data structure?
  
  {
    index, difference
  }
  if (nums.length === 0 || nums === null) return false
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (j - i <= k && Math.abs(nums[j] - nums[i]) <= t) {
        return true
      }
    }
  }
  
  return false
  
  //if there is a pair of numbers that fulfills both k + t, return true else return false
};
