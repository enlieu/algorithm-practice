/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let smaller, larger, intersection = [], smallerMap = new Map()
  
  if (nums1.length > nums2.length) {
    larger = nums1;
    smaller = nums2
  } else {
    larger = nums2;
    smaller = nums1;
  }
  
  for (let num of smaller) {
    if (!smallerMap.has(num)) {
      smallerMap.set(num, 1)
    } else {
      smallerMap.set(num, smallerMap.get(num) + 1)
    }
  }
  
  for (let num of larger) {
    if (smallerMap.get(num) >= 1) {
      intersection.push(num)
      smallerMap.set(num, smallerMap.get(num) - 1)
    }
  }
  
  return intersection
};