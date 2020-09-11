/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A === B) return true;
  for (let i = 0; i < A.length; i++) {
    A = A.slice(1) + A[0];
    if (A === B) return true;
  }
  return false;
};
