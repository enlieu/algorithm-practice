/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  let i = 0;
  let j = people.length - 1;
  let boats = 0;
  
  people.sort((a, b) => a - b)
​
  while (i <= j) {
    boats += 1;
    if (people[i] + people[j] <= limit) {
      i++
    }
    j--
  }
  
  return boats;
};
