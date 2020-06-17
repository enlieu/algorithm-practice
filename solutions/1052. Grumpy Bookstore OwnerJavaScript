/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let satisfiedCustomers = 0
  let largestContiguous = [];
  
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      largestContiguous.push(0)
      satisfiedCustomers += customers[i]
    }
    
    if (grumpy[i] === 1) {
      largestContiguous.push(customers[i])
    }
  }
  
  let left = 0;
  let right = 0
  let maxSatsify = -Infinity
  // console.log(largestContiguous)
  let insideSum = 0;
  while (right < largestContiguous.length) {
    if (right - left < X) {
      insideSum += largestContiguous[right]
      right++
    } else {
      insideSum -= largestContiguous[left]
      left++
    }
    // console.log(insideSum)
    maxSatsify = Math.max(maxSatsify, insideSum)
    // let insideSum = 0;
    // for (let i = left; i <= right; i++) {
    //   insideSum += largestContiguous[i]
    //   maxSatsify = Math.max(insideSum, maxSatsify)
    // }
    // // console.log('left', left, 'right', right)
    // // console.log('insideSum', insideSum)
    // left++
    // right++
    
    
  }
 
  return satisfiedCustomers + maxSatsify
};