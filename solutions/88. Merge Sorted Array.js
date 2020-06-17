/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
nums1 = [1,2,2,3,5,6]
m = 1
nums2 = []
n = 0
*/
var merge = function(nums1, m, nums2, n) {
  while (m > 0 && n > 0) {
    if (nums1[m-1] >= nums2[n-1]) {
        nums1[m+n-1] = nums1[m-1];
        m--;
    } else {
        nums1[m+n-1] = nums2[n-1];
        n--;
    }
  }
  
  while (n > 0) {
    nums1[n-1] = nums2[n-1];
    n--;
  }
  return nums1
};

//   console.log(nums1)
//   console.log(nums2)
//   let pointer1 = 0;
//   let pointer2 = 0;
//   let temp;
  
//   while (pointer1 < nums1.length) {
//     if (nums1[pointer1] <= nums2[pointer2]) {
//       pointer1++;
//     } else {
//       temp = nums1[pointer1]
//       nums1[pointer1] = nums2[pointer2];
//       pointer2++
//       pointer1++
//       if (temp < nums2[pointer2]) {
//         nums1[pointer1] = temp;
//         pointer1++
//         temp = nums1[pointer1]
//         pointer2++
//       } 
       
//       }
//     }
//   return nums1

