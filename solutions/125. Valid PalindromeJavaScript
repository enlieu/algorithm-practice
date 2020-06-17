/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let hash = {};
    
    
    let noSymbols = ''
    
    for (let i = 0; i < alphabet.length; i++) {
      if (!hash[alphabet[i]]) {
        hash[alphabet[i]] = true;
      }
    }
  
  let cased = s.toLowerCase();
  
   for (let i = 0; i < cased.length; i++) {
    if (hash[cased[i]]) {
      noSymbols += cased[i]
    }
  }
  
  if (noSymbols.split('').reverse().join('') === noSymbols) {
    return true;
  } else {
    return false;
  }
};