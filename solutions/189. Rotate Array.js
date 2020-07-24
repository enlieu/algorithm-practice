/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let temp = [...nums]
  
  

  for (let i = 0; i < nums.length; i++) {
    let adj = i + k
    if (adj > nums.length - 1) {
      adj = Math.abs((i + k) % nums.length)
    }
    nums[adj] = temp[i]
  }
  
  return nums
}
