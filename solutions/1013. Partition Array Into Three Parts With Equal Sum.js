/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  let total = 0
  
  for (const num of A) {
    total += num
  }
  
  let partitionTotal = total / 3;
  let partition = 0;
  let partitionCount = 0;
  
  for (let i = 0; i < A.length; i++) {
    if (partitionCount === 2) return true
    partition += A[i]
    if (partition === partitionTotal) {
      partition = 0
      partitionCount += 1
    }
  }
  
  return false
};
