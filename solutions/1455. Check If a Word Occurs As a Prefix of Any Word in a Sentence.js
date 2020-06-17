/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  
  //sentence = "i love eating burger", searchWord = "burg"
  
  let split = sentence.split(' ')
  
  for (let i = 0; i < split.length; i++) {
    if (split[i].slice(0, searchWord.length) === searchWord) {
      return i + 1
    } 
  }
  
  return -1
    
};