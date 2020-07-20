/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) { 
  // 0 0 1 2 1 0 1 2 2
  // 0 1 0 0 1 2 2 1 2
  
  /*
  [0, 0] [0, 1] [0, 2]
  [1, 0] [1, 1] [1, 2]
  [2, 0] [2, 1] [2, 2]
  
  
  double for loop through the matrix
  the diagonals' indexes are the same, sum of i + j
  store all the diagonal values within the sum key in map
  iterate through the map, pushing in diagonal values as is if key is odd, reversed if key is even
  
  */
  let map = new Map()
  let ans = []
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!map.has(i + j)) {
        map.set(i + j, [matrix[i][j]])
      } else {
        map.set(i + j, map.get(i + j).concat([matrix[i][j]]))
      }
    }
  }
  
  for (const [idx, nums] of map.entries()) {
    if (idx % 2 === 1) {
      ans = ans.concat(nums)
    } else {
      ans = ans.concat(nums.reverse())
    }
  }
  
  return ans
};