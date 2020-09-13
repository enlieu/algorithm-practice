/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval]
  
  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[0] <= intervals[i][1] && newInterval[1] >= intervals[i][0]) {
      intervals[i] = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])]
      break;
    } else {
      intervals.push(newInterval)
    }
  }
  
  intervals.sort((a, b) => a[0] - b[0])
  let currentInterval = intervals[0]
  let res = [currentInterval]
  
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(currentInterval[1], intervals[i][1])
    } else {
      currentInterval = intervals[i]
      res.push(currentInterval)
    }
  }
  return res;
}
