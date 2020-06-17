/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let hash = {};
  let smaller;
  let larger;
  let ans = [];

  if (nums1.length > nums2.length) {
    smaller = nums2;
    larger = nums1;
  } else {
    smaller = nums1;
    larger = nums2
  }

  for (let element of smaller) {
    if (hash[element]) {
      hash[element]++
    } else {
      hash[element] = 1;
    }
  }

  for (let element of larger) {
    if (hash[element] >= 1) {
      ans.push(element);
      hash[element]--
    }
  }

  return ans;
};