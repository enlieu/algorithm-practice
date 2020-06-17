/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let pointer = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      [A[pointer], A[i]] = [A[i], A[pointer]]
      pointer++
    }
  }
  return A
};