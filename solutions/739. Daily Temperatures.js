/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let days = [];
  
  for (let i = 0; i < T.length; i++) {
    let j = i + 1
    while (j < T.length) {
      if (T[j] > T[i]) {
        days.push(j - i)
        break;
      } else if (j === T.length - 1) {
        days.push(0)
      }
      j++
    }
  }
  days.push(0)
  
  return days
};