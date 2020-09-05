/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  const merge = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let res = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        res.push(arr1[i])
        i++
      } else {
        res.push(arr2[j])
        j++
      }
    }
    
    while (i < arr1.length) {
      res.push(arr1[i])
      i++
    }
    
    while (j < arr2.length) {
      res.push(arr2[j])
      j++
    }
    return res;
  }
  
  if (nums.length <= 1) return nums
  
  let mid = Math.floor(nums.length/2)
  let left = sortArray(nums.slice(0, mid))
  let right = sortArray(nums.slice(mid))
  
  return merge(left, right)
};
