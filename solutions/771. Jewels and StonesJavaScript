/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let hash = {};
  
  for (let i = 0; i < J.length; i++) {
    hash[J[i]] = 1;
  }
  
  for (let j = 0; j < S.length; j++) {
    let letter = S[j]
    
    if (hash[letter]) {
      hash[letter] += 1

    } else {
      continue;
    }
  }
  
  let hashValues = Object.values(hash)
  let hashKeysLength = Object.keys(hash).length
  
  return hashValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0) - hashKeysLength
  
};
