/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) {
    return intervals
  }
  
  let sorted = intervals.sort((a, b) => a[0] - b[0])

  
  let currentInterval = sorted[0];
  let outputArr = [sorted[0]];
  
  
  for (let i = 1; i < sorted.length; i++) {
    let currentBegin = currentInterval[0]
    let currentEnd = currentInterval[1]
    let nextBegin = sorted[i][0]
    let nextEnd = sorted[i][1]
    
    if (currentEnd >= nextBegin) {
      currentInterval[1] = Math.max(currentEnd, nextEnd)
    } else {
      currentInterval = sorted[i]
      outputArr.push(currentInterval)
    }
  }
  
   // for (let i = 1; i < sorted.length; i++) {
   //   if (sorted[i-1][1] >= sorted[i][0]) {
   //     sorted[i-1] = [Math.min(sorted[i-1][0], sorted[i][0]), Math.max(sorted[i-1][1], sorted[i][1])]
   //     sorted.splice(i, 1)
   //     i--
   //   }
   // }
  return outputArr
}