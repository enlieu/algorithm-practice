/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  
  let cIdx = S.indexOf(C)
  let ans = new Array(S.length).fill(0)
  
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      cIdx = i
    }
    ans[i] = Math.abs(i - cIdx)
  }
  
  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] === C) {
      cIdx = i
    }
    ans[i] = Math.min(ans[i], Math.abs(cIdx - i))
  }
  
  return ans;
};
