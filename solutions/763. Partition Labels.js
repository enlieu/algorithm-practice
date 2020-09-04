/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  let map = new Map();
  
  for (let i = 0; i < S.length; i++) {
    if (!map.has(S[i])) {
      map.set(S[i], [i])
    } 
    map.get(S[i]).push(i)
  }
  
  let idxs = Array.from(map.values())
  
  for (let i = 0; i < idxs.length; i++) {
    let firstIndex = idxs[i][0]
    let lastIndex = idxs[i][idxs[i].length-1]
    
    idxs[i] = [firstIndex, lastIndex]
  }
​
  let toCompare = idxs[0]
  let res = [toCompare]
  
  for (let i = 1; i < idxs.length; i++) {
    if (idxs[i][0] < toCompare[1]) {
      toCompare[1] = Math.max(toCompare[1], idxs[i][1])
    } else {
      res.push(idxs[i])
      toCompare = idxs[i]
    }
  }
  
  for (let i = 0; i < res.length; i++) {
    res[i] = res[i][1] - res[i][0] + 1
  }
  
  return res
​
};
