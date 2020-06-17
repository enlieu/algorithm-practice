/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    if (A === null || A.length === 0) return 0
    let currentMax = A[0]
    let totalMax = A[0]
    
    let currentMin = Infinity
    let totalMin = Infinity
     // let currentMin = A[0]
    // let totalMin = A[0]
    let sumOfArray = A[0]
    
    for (let i = 1; i < A.length; i++){
        sumOfArray += A[i]
        
        //kadane's
        currentMax = Math.max(A[i], currentMax + A[i])
        totalMax = Math.max(totalMax, currentMax)
        
        if (i === A.length-1) {
            break
        }
        currentMin = Math.min(A[i], currentMin + A[i])
        totalMin = Math.min(totalMin, currentMin)
    }
    
    // [0,-1,-2,-3,0] ==> 0
    // if (sumOfArray-totalMin === 0) return totalMax
    return Math.max(sumOfArray-totalMin, totalMax)
}
