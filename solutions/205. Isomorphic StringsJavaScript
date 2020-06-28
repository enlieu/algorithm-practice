/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let hash1 = {};
  let hash2 = {}
  let charCode1 = 0
  let charCode2 = 0
  let convertedS = ''
  let convertedT = ''
  
  for (let i = 0; i < s.length; i++) {
    if (!hash1.hasOwnProperty(s[i])) {
      hash1[s[i]] = charCode1.toString()
      charCode1++
    }
  }
  
  for (let i = 0; i < t.length; i++) {
  if (!hash2.hasOwnProperty(t[i])) {
    hash2[t[i]] = charCode2.toString()
    charCode2++
  }
}
  
  
  for (let i = 0; i < s.length; i++) {
    convertedS += hash1[s[i]]
  }
  
  for (let i = 0; i < t.length; i++) {
    convertedT += hash2[t[i]]
  }
  
  console.log(convertedS, convertedT)
  
  return convertedS === convertedT
    
};