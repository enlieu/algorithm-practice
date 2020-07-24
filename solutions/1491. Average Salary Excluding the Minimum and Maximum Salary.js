/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let sorted = salary.sort((a, b) => a - b)
  let sum = 0
  console.log(sorted)
  for (let i = 1; i < sorted.length - 1; i++) {
    sum += sorted[i]
  }
  
  return sum / (salary.length - 2)
    
};