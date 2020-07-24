/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let targetFreq = A.length / 2
    let hash = {}
    for (let i = 0; i < A.length; i++) {
      if (!hash.hasOwnProperty(A[i])) {
        hash[A[i]] = 1
      } else {
        hash[A[i]] += 1
      }
    }
  
  for (let key in hash) {
    if (hash[key] === targetFreq) {
      return key;
    }
  }
};