/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  
  let stonesLightHeavy = stones.sort((a, b) => a - b)
  
  while (stonesLightHeavy.length > 1) {
    stonesLightHeavy = stones.sort((a, b) => a - b)
    let heaviest = stones.pop();
    let secondHeaviest = stones.pop()

    if (heaviest === secondHeaviest) {
      continue;
    } else if (heaviest > secondHeaviest) {
      stonesLightHeavy.push(heaviest - secondHeaviest)
    }
  }
  
  if (stonesLightHeavy.length > 0) {
    return stonesLightHeavy[0]
  } else {
    return 0;
  }
    
};