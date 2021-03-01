/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
  let map = new Map();
  for (let i = 0; i < candyType.length; i++) {
    if (!map.has(candyType[i])) {
      map.set(candyType[i], true) 
    }
  }
  
  let maxCandy = candyType.length / 2;
  let totalCandyTypes = map.size
  
  return totalCandyTypes > maxCandy ? maxCandy : totalCandyTypes
};
