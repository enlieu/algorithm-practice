/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  if (s.length === 1) return 1
  
  let left = 0;
  let right = 1;
  let maxPower = -Infinity
  let insidePower = 0;
  
  
  
  while (right < s.length) {
    if (s[left] === s[right]) {
      right++ 
      insidePower = right - left
    } else {
      left++
    }
    maxPower = Math.max(maxPower, insidePower)
  }
  return maxPower
  
};