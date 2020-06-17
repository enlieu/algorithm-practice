/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  let hash = {}
  for (let i = 0; i < arr.length; i++) {
    let double = arr[i] * 2;
    hash[double] = [arr[i], i];
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] && hash[arr[i]][1] !== i) {
      return true;
    }
  }
  return false;
};