/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  
  let aSplit = A.split(' ')
  let bSplit = B.split(' ')
  let aHash = {};
  let bHash= {};

  for (let word of aSplit) {
    if (!aHash.hasOwnProperty(word)) {
      aHash[word] = 1
    } else {
      aHash[word]++
    }
  }

  for (let word of bSplit) {
     if (!bHash.hasOwnProperty(word)) {
      bHash[word] = 1
    } else {
      bHash[word]++
    }
  }


  let aUnique = aSplit.filter((word) => !bSplit.includes(word) && aHash[word] === 1)
  
  let bUnique = bSplit.filter((word) => !aSplit.includes(word) && bHash[word] === 1)

  console.log(aUnique, bUnique)

  return [...aUnique, ...bUnique]
};