/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1
  
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
//   let left = 0;
//   let right = nums.length - 1
  
//   //finding pivot point, left is the smallest num in nums array
//   while(left < right) {
//     let mid = Math.floor(left + (right - left) / 2)
//     if (nums[mid] > nums[right]) {
//       left = mid + 1
//     } else {
//       right = mid 
//     }
//   }
  
//   let start = left;
//   left = 0
//   right = nums.length - 1;
  
//   //determining which half to start searching with respect to the pivot point
//   if (target >= nums[start] && target <= nums[right]) {
//     left = start;
//   } else {
//     right = start;
//   }
  
//   //regular binary search
//   while (left <= right) {
//     let mid = Math.floor(left + (right - left) / 2)
//     if (nums[mid] === target) {
//       return mid
//     }
    
//     if (nums[mid] < target) {
//       left = mid + 1
//     } else {
//       right = mid - 1
//     }
//   }
//   return -1
// };