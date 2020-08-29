/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
  let res = []
  
  const flip = (end) => {
    let start = 0;
    while (start < end) {
      [A[start], A[end]] = [A[end], A[start]]
      start++
      end--
    }
  }
​
  for (let i = A.length; i > 0; i--) {
    //if the number is not in the right place
    if (A[i-1] !== i) {
      //find the max number of the current segment
      let maxNum = Math.max(...A.slice(0, i))
      //find out which index the max number is
      let flipToFrontIndex = A.indexOf(maxNum)
      res.push(flipToFrontIndex+1)
      //reverse the portion up to and including the max number
      let splicedToMax = A.splice(0, flipToFrontIndex + 1).reverse()
      //reverse the whole thing so that max is at the end
      A = [...splicedToMax, ...A]
      res.push(i)
      flip(i-1)
    }
  }
  return res
};
  
