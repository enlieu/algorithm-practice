/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let hash = {};
  let ans = [];
  
  
  for (let num of arr1) {
    if (!hash.hasOwnProperty(num)) {
      hash[num] = 1
    } else {
      hash[num]++
    }
  }
  
  for (let num of arr2) {
    ans.push(...new Array(hash[num]).fill(num))
    delete hash[num]
  }
  
  
  for (let num in hash) {
    ans.push(...new Array(hash[num]).fill(num))
  }

  arr1 = [...ans]
  
  return arr1
};