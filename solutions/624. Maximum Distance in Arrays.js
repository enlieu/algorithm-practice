/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
  let res = 0;
  let minVal = arrays[0][0]
  let maxVal = arrays[0][arrays[0].length-1]
  
  for (let i = 1; i < arrays.length; i++) {
    res = Math.max(res, Math.max(Math.abs(arrays[i][arrays[i].length-1] - minVal), Math.abs(maxVal - arrays[i][0])))
    minVal = Math.min(minVal, arrays[i][0])
    maxVal = Math.max(maxVal, arrays[i][arrays[i].length-1])
  }
  
  return res;
};
​
​
