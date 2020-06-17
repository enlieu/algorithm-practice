/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
//   //loop through the string
//   //left pointer, right pointer
//   //check with window method, if the chars are unique, push it into an array. 
  
  let leftPointer = 0;
  let rightPointer = 0;
  let hash = {};
  let max = 0;
  
  while (rightPointer < s.length) {
    if (!hash.hasOwnProperty(s[rightPointer])) {
      hash[s[rightPointer]] = true;
      rightPointer++
      max = Math.max(max, Object.keys(hash).length)
    } else {
      delete hash[s[leftPointer]];
      leftPointer++
      }
    }
  return max;
}



//"a[bcab]dcbb"

//leftpointer: 1
//rightpointer: 4
//hash: { a: true, b,: true, c: true}
//max: 3
  
//   let uniqueChars = [];
  
  
//   let sum = 0;
  
//   if (!s.length) {
//     return 0;
//   }

//   while (rightPointer < s.length) {
//     if (!uniqueChars.includes(s[rightPointer])) {
//       uniqueChars.push(s[rightPointer])
//       rightPointer++
//       maxUnique[uniqueChars] = uniqueChars.length;
//     } else {
//       uniqueChars = [];
//       leftPointer++;
//       rightPointer++
//       rightPointer = leftPointer;
//     }
//   }
  
//   let maxUniqueArray = Object.values(maxUnique)
//   for (let i = 0; i < maxUniqueArray.length; i++) {
//     if (maxUniqueArray[i] > sum) {
//       sum = maxUniqueArray[i]
//     }
//   }
  
// return sum
  
