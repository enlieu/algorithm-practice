/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let jewels = J.split('')
  let map = new Map();
  let total = 0;
  
  for (let jewel of jewels) {
    if (!map.has(jewel)) {
      map.set(jewel, 0)
    } 
  }
  
  for (let stone of S) {
    if (map.has(stone)) {
      map.set(stone, map.get(stone) + 1)
    }
  }
  
  for (const [jewel, count] of map.entries()) {
    total += count
  }
  
  return total
};
