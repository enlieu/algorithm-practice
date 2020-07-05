/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let xBit = x.toString(2).split('')
  let yBit = y.toString(2).split('')
  
  let longer;
  let shorter;
  
  if (xBit.length > yBit.length) {
    longer = xBit
    shorter = yBit
  } else {
    shorter = xBit
    longer = yBit
  }
  
  while (shorter.length < longer.length) {
    shorter.unshift(0)
  }
  
  let ptr = 0
  let diff = 0
  
  while (ptr < shorter.length) {
    if (shorter[ptr] != longer[ptr]) {
      diff++
    }
    ptr++
  }
  
  return diff
};