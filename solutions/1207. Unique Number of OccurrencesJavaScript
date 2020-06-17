/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let hash = {}
  for (const num of arr) {
    if (hash.hasOwnProperty(num)) {
      hash[num]++
    } else {
      hash[num] = 1
    }
  }
  
  let set = new Set(Object.values(hash))
  
  if (Object.values(hash).length !== set.size) {
    return false
  } else {
    return true;
  }
};