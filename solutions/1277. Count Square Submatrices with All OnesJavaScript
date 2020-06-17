/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    if (matrix === null || matrix.length === 0) return 0
    let dpMatrix = new Array(matrix.length+1).fill(0).map(row => new Array(matrix[0].length+1).fill(0))
    // console.log(dp)
    
    let result = 0
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++){
            if (matrix[i][j] === 1){
                let top = dpMatrix[i][j+1]
                let left = dpMatrix[i+1][j]
                let diagonal = dpMatrix[i][j]
                dpMatrix[i+1][j+1] = 1 + Math.min(top,left,diagonal) // 1 is itself
                result += dpMatrix[i+1][j+1]
                // console.log(dpMatrix)
            }
        }
    }
    return result
}