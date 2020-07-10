/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function(n) {
    let queens = [];
    let board = new Array(n).fill(".").map(ele => new Array(n).fill("."));
  
    const notAttacked = (row, col) => {
        //check if rows are valid
        for (let i = 0 ; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        
        //check top left corners
        for (let j = row-1, k = col-1; j >= 0 && k >= 0; j--, k--) {
            if (board[j][k] === 'Q') return false;
        }
        
        //check top right corners
        for (let a = row-1, b = col+1; a >= 0 && b < n; a--, b++) {
            if (board[a][b] === 'Q') return false;
        }
        
        return true;
    }
    
    const backtrack = (row) => {
        //check if the curr cell can house a valid queen
        //check if your curr row === n. If we get here, it satisfies a distinct solution. queens++
        if (row === n) {
            let copy = board.map((ele) => ele.join(''))
            queens.push(copy)
            return
        }
        
        //loop through each col to see if the queen attacks another.
        for (let col = 0; col < n; col++) {
            //check to see if this violates queens
            if (notAttacked(row,col)) {
                board[row][col] = 'Q' //Set queen at first sq
            
                //Helper Func to determine if any queens attack this specific square
                backtrack(row+1);
                board[row][col] = '.';
            }
        }
        
    }
    
    
    
    backtrack(0)
    
    return queens;
}