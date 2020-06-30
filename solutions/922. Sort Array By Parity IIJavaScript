/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let ans = [];
  let odd = 1
  let even = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      ans[even] = A[i]
      even += 2
    } else if (A[i] % 2 === 1) {
      ans[odd] = A[i]
      odd += 2
    }
  }
  return ans;
};