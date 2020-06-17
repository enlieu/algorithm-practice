/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let hash = new Map();
    for(let i = 0; i < s.length; i++ ){
      let char = s[i]
         if(hash.has(char)){
             hash.set(char,2);
         }
         else {
             hash.set(char,1);
         }
     }

     for (let i = 0; i < s.length; i++) {
       let char = s[i]
       if (hash.get(char) === 1) {
         return i;
       }
     }
     return -1
};