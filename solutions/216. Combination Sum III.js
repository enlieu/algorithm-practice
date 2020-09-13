/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  var res = [];
  helper([], n, 1);
  return res;
  function helper(temp, need, start) {
    if (temp.length === k && need === 0) {
      res.push(temp.slice());
    } else {
      for (var i = start; i <= 9; i++) {
        if (i > need) continue;
        temp.push(i);
        helper(temp, need - i, i + 1);
        temp.pop();
      }
    }
  }
}
