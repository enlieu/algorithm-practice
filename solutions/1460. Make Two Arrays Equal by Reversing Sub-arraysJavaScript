/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
  let hash = {}
  for (let i = 0; i < target.length; i++) {
    if (hash.hasOwnProperty(target[i])){
      hash[target[i]] += 1
    } else {
      hash[target[i]] = 1
    }
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (!hash.hasOwnProperty(arr[i])) {
      return false
    } else {
      hash[arr[i]] -= 1
    }
  }
  
  
  if (Object.values(hash).every(num => num === 0)) {
    return true
  } else {
    return false;
  }
  
};