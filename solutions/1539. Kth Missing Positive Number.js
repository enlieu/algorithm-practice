/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  if (k <= arr[0] - 1) return k
  
  k -= arr[0] - 1
  
  for (let i = 0; i < arr.length - 1; i++) {
    let currMissing = arr[i+1] - arr[i] - 1
    if (k <= currMissing) {
      return arr[i] + k
    }
    k -= currMissing
  }
  
  return arr[arr.length-1] + k
};
