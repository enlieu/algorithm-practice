/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let sorted = [...nums].sort((a, b) => a - b)
  
  let start = Infinity
  let end = -Infinity
  
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== nums[i]) {
      start = Math.min(start, i)
      end = Math.max(end, i)
    }
  }

  return end - start >= 0 ? end - start + 1 : 0
}
  