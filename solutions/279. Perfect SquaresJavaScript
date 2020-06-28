/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = new Array(n+1).fill(Infinity)
    
    dp[0] = 0

    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        let squaredVal = i*i
        for(let j = squaredVal; j < dp.length; j++) {
          dp[j] = Math.min(dp[j], 1 + dp[j - squaredVal])  
        }
    }
  
  return dp[n]
};