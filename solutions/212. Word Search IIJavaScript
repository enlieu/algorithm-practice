/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  //create a data structure (trie) to keep track of our words
  //a nested for loop to go through the entire word
  //if word.isWord is true, we hit the word and push the word into our result array
  
  let result = [];
  let root = {}; //hash is the root
  
  for (const word of words) {
    let wordNode = root
    for (const char of word) {
      if (!wordNode[char]) {
        wordNode[char] = {}
      }
      wordNode = wordNode[char]
    }
    wordNode['isWord'] = word
  }
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let curr = board[i][j]
      if (root[curr]) {
        dfs(board, i, j, root, result)
      }
    }
  }
  return result
    
};

const dfs = (board, i, j, root, result) => {
  if (!root) return
  
  if (root.isWord) {
    result.push(root.isWord)
    root.isWord = false
  }
  
  if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] === '#') {
    return;
  }
  //if we hit the end of the word, 

  
  //set current to visited
  let letter = board[i][j]
  board[i][j] = '#'
  
  dfs(board, i - 1, j, root[letter], result)
  dfs(board, i + 1, j, root[letter], result)
  dfs(board, i, j - 1, root[letter], result)
  dfs(board, i, j + 1, root[letter], result)
  
  board[i][j] = letter
}