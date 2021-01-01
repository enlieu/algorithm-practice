/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  let map = new Map();
  for (let i = 0; i < pieces.length; i++) {
    map.set(pieces[i][0], pieces[i])
  }
  
  let i = 0;
  while (i < arr.length) {
    if (map.get(arr[i])) {
      let a = map.get(arr[i])
      for (let j = 0; j < a.length; j++) {
        if (arr[i] === a[j]) {
          i++
        }
      }
    } else {
     return false 
    }
  }
  
  return true;
};
