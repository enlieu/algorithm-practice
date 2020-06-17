/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function(arr, k) {
  let sorted = arr.sort((a, b) => a - b)
  let median = Math.floor((arr.length - 1) / 2)
  let toBeSorted = []
  let res = [];
  
  for (let i = 0; i < arr.length; i++) {
    toBeSorted.push([arr[i], Math.abs(arr[i] - sorted[median])])
  }
  
  let resorted = toBeSorted.sort((a, b) => b[1] - a[1] || b[0] - a[0])

  for (let i = 0; i < k; i++) {
    res.push(resorted[i][0])
  }
  
  return res
};