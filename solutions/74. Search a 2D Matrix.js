/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length || !matrix[0].length) {
    return false; 
  }
  
  const binarySearch = (row) => {
    let left = 0;
    let right = row.length - 1
    while (left <= right) {
      let mid = Math.floor(left + (right - left)  / 2)
      if (row[mid] === target) return true;
      if (row[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return false;
  }
  
  for (let i = 0; i < matrix.length; i++) {
    if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length-1]) {
      return binarySearch(matrix[i])
    }
  }
  
  return false
};
