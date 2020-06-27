/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  
  let arr = [];
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++
    }
    if (nums[i] === 0) {
      if (count !== 0) {
        arr.push(count)
      }
      count = 0;
      arr.push(0)
    } 
    if (i === nums.length - 1) {
      arr.push(count)
    }
  }
  
  console.log(arr)
  
  if (arr.length < 3) {
    return arr.reduce((accumulator, currentValue)  => accumulator + currentValue, 0) - 1
  }
  
  let left = 0;
  let right = 0;
  
  let largestContiguous = -Infinity
  let maxInside = 0
  
  while (right < arr.length) {
   maxInside += arr[right]
   right++
   largestContiguous = Math.max(maxInside, largestContiguous)
    
   if (right - left > 2) {
     maxInside -= arr[left]
     left++
   }
 }
  
  return largestContiguous 
};