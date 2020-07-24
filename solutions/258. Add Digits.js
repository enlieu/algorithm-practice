/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num.toString().length > 1) {
      num = num.toString().split('').map((num) => Number(num)).reduce((acc, curr) => acc + curr, 0)
    }
  
  return num
};