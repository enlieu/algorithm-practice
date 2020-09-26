/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let poisonedTime = 0;
  let poisonEnd;
  
  for (let i = 0; i < timeSeries.length; i++) {
    if (poisonEnd >= timeSeries[i]) poisonedTime -= poisonEnd - timeSeries[i]
    poisonEnd = timeSeries[i] + duration
    poisonedTime += duration
  }
  
  return poisonedTime
};
