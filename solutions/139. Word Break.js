/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  //make a dp array
  let dp = new Array(s.length + 1).fill(false)
  //set first index to true, obviously. 
  dp[0] = true
  
  //loop through the string, i is anchor, j checks the slice from i -> j
  //once the sliced word is included in the word dictionary, 
  for (let i = 0; i < s.length; i++) {
    for (let j = 1; j <= s.length; j++) {
      if (dp[i] === true && wordDict.includes(s.slice(i, j))) {
          dp[j] = true
      }
    }
  }

  return dp[dp.length-1]
}
//   let splitWord = s.split('')
//   //splitWord = [l, e, e, t, c, o, d, e]
  
//   for (let i = 0; i < wordDict.length; i++) {
//     let word = wordDict[i];
//     if (s.includes(word)) {
//       // let splitWord = s.split('')
//       let start = s.indexOf(word)
//       // console.log(splitWord[start])
//       splitWord.splice(start, word.length)
//       i--
//       s = splitWord.join('')
//     }

//   }
  
//   if (splitWord.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
