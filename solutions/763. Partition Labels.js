/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  let ans = [];
  let hash = {};
  for (let i = 0; i < S.length; i++) {
    if (!hash.hasOwnProperty(S[i])) {
      hash[S[i]] = []
    }
    hash[S[i]].push(i)
  }
  
  let startEnd = Object.values(hash).map((idx) => {
    return [Math.min(...idx), Math.max(...idx)]
  }).sort((a, b) => a[0] - b[0])
  
  
  let currentInterval = startEnd[0]
  let outputArr = [startEnd[0]];
  
   for (let i = 1; i < startEnd.length; i++) {
     let currentStart = currentInterval[0]
     let currentEnd = currentInterval[1]
     let nextStart = startEnd[i][0]
     let nextEnd = startEnd[i][1]
     
     if (currentEnd >= nextStart) {
       currentInterval[1] = Math.max(currentEnd, nextEnd)
     } else {
       currentInterval = startEnd[i]
       outputArr.push(currentInterval)
     }
   }

  for (let i = 0; i < outputArr.length; i++) {
    ans.push(outputArr[i][1] - outputArr[i][0] + 1)
  }
  
  return ans;
};
