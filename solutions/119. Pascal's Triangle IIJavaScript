/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let pascals = [];
  let size = 1
  for (let i = 0; i <= rowIndex; i++) {
    pascals.push(new Array(size).fill(1))
    size++
  }
  
  for (let i = 0; i < pascals.length; i++) {
    for (let j = 0; j < pascals[i].length; j++) {
      if (i > 0 && j > 0) {
        let aboveSum = pascals[i - 1][j - 1] + pascals[i - 1][j] || 1
        pascals[i][j] = aboveSum
      }
    }
  }
  return pascals[rowIndex]
};