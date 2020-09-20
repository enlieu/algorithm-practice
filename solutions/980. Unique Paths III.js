var uniquePathsIII = function(grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0
  
  let iStart, jStart;
  let zeroCount = 1;
  let uniquePaths = 0;
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        iStart = i;
        jStart = j;
      } else if (grid[i][j] === 0) {
        zeroCount += 1;
      }
    }
  }
  
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === '*' || grid[i][j] === -1) return
​
    if (grid[i][j] === 2 && zeroCount === 0){
      uniquePaths += 1
      return
    }
​
    let temp = grid[i][j]
    grid[i][j] = '*'
    zeroCount -= 1
​
    dfs(i+1,j)
    dfs(i-1,j)
    dfs(i,j+1)
    dfs(i,j-1)
​
    grid[i][j] = temp
    zeroCount += 1
  }
  
  dfs(iStart, jStart)
  
  return uniquePaths
};
