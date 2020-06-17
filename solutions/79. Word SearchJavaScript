/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// var exist = function(board, word) {
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[i].length; j++){
//             if (board[i][j] === word.charAt(0) && dfs(board, i , j, 0, word)) { // need to find 1st letter && all remainingletters // recursive call board,row,col,count letters found, word
//                 return true
//             }
//             // else console.log(word.charAt(0))
//         }
//     }
//     return false
// };

function dfs(board, row, col, count, word) {
    if (count === word.length) return true // key check
    //check bounds
    if (row < 0 || row >= board.length || col < 0 || col >= board[row].length || board[row][col] !== word.charAt(count)) {
        return false
    }
    // still looking for word, on the correct letter
    // same cell can't be used more than once. have to mark it i.e. sinking island
    // need to add letter back though
    let temp = board[row][col]
    board[row][col] = ' '
    // continue traversal from current spot, increment count
    let found = dfs(board, row + 1, col, count + 1, word) 
        || dfs(board, row - 1, col, count + 1, word) 
        || dfs(board, row, col+1, count+1, word) 
        || dfs(board, row, col-1, count+1, word)
    
    board[row][col] = temp
    return found
}
    


var exist = function(board, word) {
  if (board === null || board.length === 0) return null
  let letterIndex = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(board, i, j, letterIndex, word) === true) {
          return true
        }
      }
    }
  }
  return false;
};

// O(nxm) time complexity. every cell in grid
// recursive call stack. O(n) worst case if you use every letter on the board


// const dfs = (board, i, j, word, letterIndex) => {
//   if (letterIndex === word.length) {
//       return true
//     }

//     if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || board[i][j] !== word[letterIndex]) {
//         return false
//     }
//     let temp = board[i][j]
    
//     board[i][j] = ' '
  
  
//     if(dfs(board, i+1, j, word, letterIndex+1)  || dfs(board, i-1, j, word, letterIndex+1) || dfs(board, i, j+1, word, letterIndex+1) || dfs(board, i, j-1, word, letterIndex+1)) {
//       board[i][j] = temp
//       return true;
//     } else {
//       board[i][j] = temp
//       return false
//     }
// }




    