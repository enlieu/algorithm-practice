/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
​
var carPooling = function(trips, capacity) {
  let map = new Map();
  let maxDistance = 0;
  
  for (const [numPassengers, startLocation, endLocation] of trips) {
    if (!map.has(startLocation)) map.set(startLocation, 0)
    if (!map.has(endLocation)) map.set(endLocation, 0)
    
    map.set(startLocation, map.get(startLocation) + numPassengers)
    map.set(endLocation, map.get(endLocation) - numPassengers)
​
    maxDistance = Math.max(maxDistance, endLocation)
  }
  
  let currPassengers = 0;
  
  for (let i = 0; i < maxDistance; i++) {
    if (currPassengers > capacity) return false
    if (map.has(i)) currPassengers += map.get(i)  
  }
  
  return true;
}
​
