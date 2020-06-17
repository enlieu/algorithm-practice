/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  //if there are onyl two points, return true
  //find the slope between x and y for the first two coordinates
  
  if (coordinates.length === 2) {
    return true;
  }
  
  let leftPointer = 1;
  let rightPointer = 2
  
  let firstPoint = coordinates[0]
  let secondPoint = coordinates[1]
  
  let xDifference = secondPoint[0] - firstPoint[0];
  let yDifference = secondPoint[1] - firstPoint[1];
  
  let slope = yDifference / xDifference
  
  while (rightPointer < coordinates.length) {
    if ((coordinates[rightPointer][1] - coordinates[leftPointer][1])  / (coordinates[rightPointer][0] - coordinates[leftPointer][0]) === slope) {
      leftPointer++
      rightPointer++
    } else {
      return false;
    }
  }
  return true;
};