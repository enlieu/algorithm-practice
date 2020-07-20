/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    /* [ 1 ], 
     [ 1, 1 ], 
    [ 1, 1, 1 ], 
  [ 1, 1, 1, 1 ], 
 [ 1, 1, 1, 1, 1 ]  
 
 [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

    [ [ 1 ], 
    [ 1, 1 ], 
   [ 1, 2, 1 ], 
  [ 1, 3, 4, 1 ], 
[ 1, 4, 8, 9, 1 ] ]

          [ [0, 0] ], 
      [ [1, 0], [1, 1] ], 
    [ [2, 0], [2, 1], [2, 2] ], 
  [ [3, 0], [3, 1], [3, 2], [3, 3]], 
[ [4, 0], [4, 1], [4, 2], [4, 3], [4, 4] ] 
 
 
 
 */
  let pascals = []
  let size = 1
  for (let i = 0; i < numRows; i++) {
    pascals.push(new Array(size).fill(1))
    size++
  }
  
  for (let i = 0; i < pascals.length; i++) {
    for (let j = 0; j < pascals[i].length; j++) {
      if (i > 0 && j > 0) {
        //means we are in bounds to potentially calculate the two above nums
        //if the two numbers above exist, make it the two above. if not, make it 1
        let aboveNums = pascals[i-1][j] + pascals[i-1][j-1] || 1
        pascals[i][j] = aboveNums
      } 
    }
  }
  
  return pascals
};