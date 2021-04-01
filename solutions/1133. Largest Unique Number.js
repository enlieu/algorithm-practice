/**
 * @param {number[]} A
 * @return {number}
 */
var largestUniqueNumber = function(A) {
  let map = new Map();
  
  for (const num of A) {
    map.set(num, map.get(num) + 1 || 1)
  }
  
  let largestUnique = -1;
  
  for (const [num, freq] of map.entries()) {
    if (freq === 1 && num > largestUnique) largestUnique = num;
  }
  
  return largestUnique;
};
