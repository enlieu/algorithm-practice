/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  
  let ans = [];
  let fin = [];
  
  for (let i = 0; i < points.length; i++) {
    let coordinate = points[i]
    ans.push([Math.sqrt(Math.abs(Math.pow(coordinate[0], 2) + Math.pow(coordinate[1], 2))), coordinate])
  }
  
  let sorted = ans.sort((a, b) => a[0] - b[0])
  
  
  for (let i = 0; i < K; i++) {
    fin.push(sorted[i][1])
  }
  
    return fin
};