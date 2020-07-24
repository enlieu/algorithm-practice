/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let map = new Map();
  let res = [];
  
  for (let i = 0; i < numbers.length; i++) {
    let difference = target - numbers[i]
    if (!map.has(numbers[i])) {
      map.set(difference, i)
    }
    if (map.has(numbers[i]) && map.get(numbers[i]) !== i) {
      res.push(map.get(numbers[i]) + 1, i + 1)
      break;
    }
  }
  return res;
}