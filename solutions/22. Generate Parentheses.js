/**
 * @param {number} n
 * @return {string[]}
 */

const build = (result, currStr, open, close, n) =>  {
  if (currStr.length === n*2) {
    result.push(currStr)
    return
  }
  
  if (open < n) {
    build(result, currStr + '(', open + 1, close, n)
  }
  
  if (close < open) {
    build(result, currStr + ')', open, close + 1, n)
  }
}

var generateParenthesis = function(n) {
  let result = [];
  build(result, "", 0, 0, n)
  return result;
};

