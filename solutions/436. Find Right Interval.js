/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  if (intervals.length === 1) return [-1]
  
  let map = new Map();
  
  for (let i = 0; i < intervals.length; i++) {
    map.set(intervals[i][0], i)
  }
  
  let res = new Array(intervals.length).fill(-1)
  
  for (let j = 0; j < intervals.length; j++) {
    let end = intervals[j][1]
    let min = Infinity
      for (const [start, index] of map.entries()) {
        if (start >= end && index !== j) {
          if (start - end < min) {
            min = Math.min(min, start - end)
            res[j] = index
          }
        }
      }
  }
  
  return res
}
