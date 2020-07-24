/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  let inverted = A.map((image) => image.reverse().map((el) => el === 0 ? 1 : 0))
  
  return inverted
};