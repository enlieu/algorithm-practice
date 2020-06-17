/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let lettersThatAppear = {};
  let ans = [];
  for (let i = 0; i < A[0].length; i++) {
    if (lettersThatAppear.hasOwnProperty(A[0][i])) {
      lettersThatAppear[A[0][i]]++
    } else {
      lettersThatAppear[A[0][i]] = 1
    }
  }
  
  
  for (let i = 1; i < A.length; i++) {
    let word = A[i];
    
    let insideHash = {};
    
    for (let j = 0; j < word.length; j++) {
      let letter = word[j]
      if (lettersThatAppear.hasOwnProperty(letter) && !insideHash.hasOwnProperty(letter)) {
        insideHash[letter] = 1
      }  else if (lettersThatAppear.hasOwnProperty(letter) && insideHash.hasOwnProperty(letter) && insideHash[letter] < lettersThatAppear[letter]) {
        insideHash[letter]++
      }
    }
    lettersThatAppear = insideHash
  }
  
  for (let letter in lettersThatAppear) {
    for (let i = 0; i < lettersThatAppear[letter]; i++) {
      ans.push(letter)
    }
  }
  return ans
};