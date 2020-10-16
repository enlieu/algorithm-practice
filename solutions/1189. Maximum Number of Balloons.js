/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  let map = new Map();
  
  for (let i = 0; i < text.length; i++) {
    map.set(text[i], map.get(text[i]) + 1 || 1)  
  }
  
  let balloon = 'balloon'
  let max = 0;
  let idx = 0;
  
  while (map.get(balloon[idx]) > 0) {
    map.set(balloon[idx], map.get(balloon[idx]) - 1) 
    idx++
​
    if (idx === balloon.length - 1) {
      max += 1
      idx = 0;
    }   
  }
  
  return max
};
