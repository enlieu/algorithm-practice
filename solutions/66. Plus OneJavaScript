/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
    for (let i = digits.length-1; i >= 0; i--){
        if (digits[i] === 9) {
            digits[i] = 0
        } else {
            digits[i]++
            return digits
        }
    }
    // digits.unshift(1) // slow
    return [1].concat(digits)
}
// var plusOne = function(digits) {
  
//   let not9;
  
//   for (let i = 0; i < digits.length; i++) {
//     if (digits[i] !== 9) {
//       not9 = i
//     }
//   }
  
//   if (not9 === digits.length - 1) {
//     digits[not9]++
//   } else if (not9 === undefined) {
//     digits = [1].concat(digits)
//     digits.fill(0, 1)
//   } else {
//     digits[not9]++
//     digits.fill(0, not9 + 1)
//   }
  
//   return digits
// };

