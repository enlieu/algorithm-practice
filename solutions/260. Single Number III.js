/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let map = new Map();
  
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, true)
    } else {
      map.delete(num)
    }
  }
  
  return [...map.keys()]
};