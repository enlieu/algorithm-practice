/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  const distance = (a, b) => {
    return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]);
  }
  
  const distances = [distance(p1, p2), distance(p1, p3), distance(p1, p4), distance(p2, p3), distance(p2, p4), distance(p3, p4)];
  
  distances.sort((a, b) => a - b)
​
  return distances[0] && distances[0] === distances[1] && distances[0] === distances[2] && distances[0] === distances[3] && distances[4] === distances[5];
};
