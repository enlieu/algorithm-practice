/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// 35/36. too slow when p is long
var findAnagrams = function(s, p) {
    let result = []
    if (s.length < p.length) return result
    let pHash = {}
    for (let i = 0; i < p.length; i++){
        if (!pHash.hasOwnProperty(p[i])) {
            pHash[p[i]] = 1
        } else pHash[p[i]]++
    }
    for (let i = 0; i < s.length-p.length+1; i++) {//O(N) * O(N*P)
        if (pHash.hasOwnProperty(s[i]) && foundAnagram(s, i, p.length, pHash)) {
            result.push(i)  
        }
    }
    return result
};
function foundAnagram(str, start, end, pHash){
    let possibleWord = str.slice(start, start+end)//O(N*P)
    let map = {}
    for (let letters of possibleWord){//O(P)
        map[letters] = map[letters] ? map[letters]+1 : 1
    }
    for (let letter in map) {//O(P)
        if (!pHash.hasOwnProperty(letter) || (pHash.hasOwnProperty(letter) && pHash[letter] !== map[letter])) {
            return false
        }
    }
    return true
}

// var findAnagrams = function(s, p) { 
//     let pHash = {}
//     //{ a: 1, b: 1, c: 1 }

//     for (let i = 0; i < p.length; i++){
//         if (!pHash.hasOwnProperty(p[i])) {
//             pHash[p[i]] = 1
//         } else pHash[p[i]]++
//     }
//     let counter = Object.keys(pHash).length
//     //3
    
//     let wordLen = p.length
//     //3
    
//     let result = [];
//     let left = 0
//     let right = 0
//     //s.length = 10
//     //cbaebabacd
    
//     while (right < s.length){
//         if (pHash.hasOwnProperty(s[right])) {
//             pHash[s[right]]--
//             if (pHash[s[right]] === 0) {
//                 counter--
//             }
//         }
//         right++
        
//         while(counter === 0){ // anagram found
//             if (right - left === wordLen){
//                 result.push(left)
//             }
//             if (pHash.hasOwnProperty(s[left])) { // restore counts by incrementing left
//                 pHash[s[left]]++
//                 if (pHash[s[left]] > 0) counter++
//             }
//             left++
//         }
//     }
//     return result
// }





// var findAnagrams = function(s, p) {
//   let hash = {};
  
//   for (let i = 0; i < p.length; i++) {
//     let letter = p[i]
//     if (!hash[letter]) {
//       hash[letter] = 1
//     } else {
//       hash[letter]++
//     }
//   }
  
//   let queue = [];
//   let left = 0;
//   let right = p.length;
//   let ans = [];
  
//   for (let i = 0; i < s.length - p.length + 1; i++) {
//     let word = s.slice(left, right)
    
//     queue.push([word, left])
//     left++
//     right++
//   }
  
//   console.log(queue)
//   console.log(hash)
  
  
  // for (let i = 0; i < queue.length; i++) {
  //   let word = queue[i]
  //   for (let j = 0; j < 1; j++) {
  //     let compare = hash
  //     for (let k = 0; k < word[0].length; k++) {
  //       let letter = word[0][k]
  //       if (compare[letter]) {
  //         compare[letter]--
  //       }
  //       let letterFrequency = Object.values(compare);
  //       let sum = 0
  //       for (let l = 0; l < letterFrequency.length; l++) {
  //         sum += letterFrequency[l]
  //       }
  //       if (sum === 0) {
  //         ans.push(word[1])
  //       }
  //       compare = hash
  //     }
  //   }
  // }
  //     // if (compare[word[0][j]]) {
      //   compare[word[0][j]]--
      // }

//       if (sum === 0) {
//         ans.push(word[1])
//       }
      
//     }
//   }
  
  // console.log(ans)
//   console.log(hash)
  
//   console.log(ans)
  
  //      let letterFrequency = Object.values(compare)
      // let sum = 0;
      // for (let k = 0; k < letterFrequency.length; k++) {
      //   sum += letterFrequency[k]
      // }
      
  
 
  
