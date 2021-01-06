/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
  let map = new Map();
  
  items.sort((a, b) => b[1] - a[1])
  
  for (const [id, score] of items) {
    if (!map.has(id)) map.set(id, [])
    if (map.get(id).length < 5) map.get(id).push(score)
  }
  
  for (let [id, total] of map.entries()) {
    total = Math.floor(total.reduce((a, b) => a + b, 0) / 5)
    map.set(id, total)
  }
  
  return [...map.entries()].sort((a, b) => a[0] - b[0])
};
