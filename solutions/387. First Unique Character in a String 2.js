/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
   let map = new Map();
   
   for (let i = 0; i < s.length; i++) {
     let letter = s[i]
     
     if (!map.has(letter)) {
       map.set(letter, [i, 1])
     } else {
       map.set(letter, [i, map.get(letter)[1] + 1])
     }
   }
   
   for (let [letter, [index, count]] of map.entries()) {
     if (count === 1) {
       return index
     }
   }
   
   return -1 
};