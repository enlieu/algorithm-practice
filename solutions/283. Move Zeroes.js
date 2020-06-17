/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     let zeroCount = 0;
//     for (let i = 0; i < nums.length - zeroCount; i++) {
//         if (nums[i] === 0) {
//             nums.splice(i, 1);
//             nums.push(0)
//             zeroCount++
//             i--
//         }
//     }
//     return nums;
// }

var moveZeroes = function (array) {
  let ptr = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      [array[i], array[ptr]] = [array[ptr], array[i]];
      ptr++;
    }
  }
  return array
}

