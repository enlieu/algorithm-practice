/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  let sums = new Map()
  let ans = 0
  
  for (const a of A) {
    for (const b of B) {
      if (!sums.has(a + b)) {
        sums.set(a + b, 1)
      } else {
        sums.set(a + b, sums.get(a + b) + 1)
      }
    } 
  }
  for (const c of C) {
    for (const d of D) {
      let differenceToZero = 0 - (c + d)
      if (sums.has(differenceToZero)) {
        ans += sums.get(differenceToZero)
      }
    }
  }
  
  return ans;
};