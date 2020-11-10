/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  for (const row of A) {
    row.reverse()
    for (let i = 0; i < row.length; i++) {
      row[i] === 0 ? row[i] = 1 : row[i] = 0
    }
  }
  return A 
};
