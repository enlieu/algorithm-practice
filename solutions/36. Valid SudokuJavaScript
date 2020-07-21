/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  
  const rowCheck = () => {
    for (let i = 0; i < board.length; i++) {
      let rowSet = new Set();
      for (let j = 0; j < board[i].length; j++) {
        if (rowSet.has(board[i][j])) return false;
        if (board[i][j] !== '.') {
          rowSet.add(board[i][j])  
        }
      }
    }
    return true
  }
  
  const columnCheck = () => {
    for (let i = 0; i < board.length; i++) {
      let columnSet = new Set();
      for (let j = 0; j < board[i].length; j++) {
        if (columnSet.has(board[j][i])) return false;
        if (board[j][i] !== '.') {
          columnSet.add(board[j][i])  
        }
      }
    }
    return true
  }
  
  
  const squareCheck = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let squareSet = new Set(); 
        for (let x = i * 3; x < i * 3 + 3; x++) {
          for (let y = j * 3; y < j * 3 + 3; y++) {
            if (squareSet.has(board[x][y])) return false
            if (board[x][y] !== '.') {
              squareSet.add(board[x][y])
            }
          }
        }
      }
    }
    return true
  }

  return rowCheck(board) && columnCheck(board) && squareCheck(board) 
};