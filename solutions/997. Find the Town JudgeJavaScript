/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
//Input: N = 3, trust = [[1,3],[2,3],[3,1]]

var findJudge = function(N, trust) {
  
  if (trust.length === 0 || !trust) {
    return 1
  }
  
  let hash1 = {};
  let hash2 = {};
  
  for (let i = 0; i < trust.length; i++) {
    hash1[trust[i][0]] = true
    
    if (!hash2[trust[i][1]]) {
      hash2[trust[i][1]] = [trust[i][0]];
    } else {
      hash2[trust[i][1]].push(trust[i][0])
    }
  }
  
  for (let key in hash2) {
    if (hash2[key].length === N - 1 && !hash1[key]) {
      return key;
    }
  }
  
  return -1 
  
};