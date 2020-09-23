/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  let map = new Map();
  let luckyNumber = [];
  let mins = [];
​
  for (let i = 0; i < matrix.length; i++) {
    mins.push(Math.min(...matrix[i]))
    for (let j = 0; j < matrix[i].length; j++) {
      if (!map.has(j)) {
        map.set(j, [])
      }
      map.get(j).push(matrix[i][j])
    }  
  }
​
  for (const min of mins) {
    for (const nums of map.values()) {
      if (min === Math.max(...nums)) {
        luckyNumber.push(min)
      }
    }
  }
  
  return luckyNumber
};
