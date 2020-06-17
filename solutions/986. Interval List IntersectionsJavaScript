/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  let output = [];
  let Aptr = 0;
  let Bptr = 0;
  let start;
  let end;
  while (Aptr < A.length && Bptr < B.length) {
    start = Math.max(A[Aptr][0], B[Bptr][0]); //8 from B
    end = Math.min(A[Aptr][1], B[Bptr][1]);//10 from A
    if (start <= end) {
      output.push([start, end]);
    }
    if (A[Aptr][1] < B[Bptr][1]) {
      Aptr++;
    } else {
      Bptr++;
    }
  }
  return output;
};