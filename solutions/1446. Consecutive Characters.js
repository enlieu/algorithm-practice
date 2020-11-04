/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  if (!s.length) return 0
  
  let left = 0;
  let right = 1;
  let power = 1;
  let maxPower = 1;
​
  while (right < s.length) {
    if (s[left] === s[right]) {
      power++
    } else {
      power = 1;
      left = right
    }
    maxPower = Math.max(power, maxPower)
    right++
  }
  
  return maxPower;  
};
