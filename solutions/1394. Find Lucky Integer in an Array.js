/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash.hasOwnProperty(arr[i])) {
      hash[arr[i]]++
    } else {
      hash[arr[i]] = 1
    }
  }
  let ans = [];
  for (let num in hash) {
    if (Number(num) === hash[num]) {
      ans.push(Number(num))
    }
  }
  if (ans.length) {
    return Math.max(...ans)
  } else {
    return - 1 
  }

};