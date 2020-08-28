/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  let map = new Map();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!map.has(i-j)) {
        map.set(i-j, matrix[i][j])
      } else if (map.get(i-j) !== matrix[i][j]) {
        return false;
      }
    }
  }
  return true;
};
