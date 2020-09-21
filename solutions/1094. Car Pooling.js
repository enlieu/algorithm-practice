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
    map.set(startLocation, map.get(startLocation) || 0)
    map.set(endLocation, map.get(endLocation) || 0)
​
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
