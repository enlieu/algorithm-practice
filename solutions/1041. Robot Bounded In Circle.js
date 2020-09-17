/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  let currentDirection = 0;
  let currentLocation = [0,0]
  
  let directions = new Map([
  [0, ([x, y]) => [x,y+1]],
  [1, ([x, y]) => [x+1,y]],
  [2, ([x, y]) => [x,y-1]],
  [3, ([x, y]) => [x-1,y]]
  ])
  
  
 const orientation = (direction) => {
    if (direction === 'R') {
      currentDirection += 1
    }
    if (direction === 'L') {
      currentDirection -= 1
    }
   
   if (currentDirection > 3) currentDirection = 0;
   if (currentDirection < 0) currentDirection = 3;
   
   return currentDirection
  }
​
  let iterations = 0;
​
  while (iterations !== 4) {
    for (const direction of instructions) {
      if (direction === 'G') {
        let operator = directions.get(currentDirection)
        currentLocation = operator(currentLocation)
      } else {
        orientation(direction)
      }
    }
    iterations += 1
  }
  
  return currentLocation.toString() === [0,0].toString()
};
​
​
