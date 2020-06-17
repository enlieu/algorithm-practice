/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  let step = 0;
  let arrLength = A.length;
  
  while (step + 1 < arrLength && A[step] < A[step+1]) {
    step++
  }
  
  if (step === 0 || step === arrLength - 1) return false
  
  while (step + 1 < arrLength && A[step] > A[step+1]) {
    step++
  }
  
  if (step === arrLength - 1) {
    return true;
  } else {
    return false;
  }
}

