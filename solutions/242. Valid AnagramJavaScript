/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hash1 = {};
    
    if (s.length !== t.length) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        if(hash1[s[i]]) {
            hash1[s[i]]++
        } else {
            hash1[s[i]] = 1
        }
        
         if(hash1[t[i]]) {
            hash1[t[i]]--
        } else {
            hash1[t[i]] = -1
        } 
    }
    
    return Object.keys(hash1).every(k => hash1[k] === 0)
}