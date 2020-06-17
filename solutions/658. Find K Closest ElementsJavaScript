/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  let low = 0, hi = arr.length - k;
  while(low < hi) {
    let mid = Math.floor((low+hi)/2);
// for subarray starting at mid with size k+1, we compare element of two ends to eliminate the loser
    if (x-arr[mid] > arr[mid+k]-x) {
      low = mid+1; // arr[mid] is the one further away from x, eliminate range[lo, mid]
    } else {
      hi = mid; // arr[mid+k] is the one further away, all [mid, hi] will have simiar situation, eliminate them
        }
    }
    return arr.slice(low, low+k);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   let left = 0;
//   let right = arr.length - 1;
//   let mid;
//   let startIdx = -1
  
//   while (left <= right) {
//     let mid = Math.floor(left + (right - left)  / 2)
//     if (arr[mid] === x) {
//       startIdx = mid;
//     }
//     if (arr[mid] < x) {
//       left = mid + 1
//     } else {
//       right = mid - 1
//     }
//   }
  
//   if (startIdx === -1) startIdx = left
  
//   console.log(startIdx)
  
//    if (startIdx - k < 0) {
//     return arr.slice(0, k)
//   } else {
//     return arr.slice(startIdx - k)
//   }
  
//   if (left < 0) {
//       left = 0
//     } else if (right >= arr.length) {
//       right = arr.length - 1
//     } else {
//       left = startIdx - 1;
//       right = startIdx + 1;
//     }
  
//   while(right - left < k) {
//     if (x - arr[left] < arr[right] - x) {
//       left--
//     } else {
//       right++
//     }
//   }
  
//   return arr.slice(left, right)
};