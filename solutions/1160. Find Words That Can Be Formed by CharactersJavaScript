/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let notFormed = [];
  let charHash = {};
  let sum = 0;
   for (const char of chars)  {
     if (charHash.hasOwnProperty(char)) {
       charHash[char]++
     } else {
       charHash[char] = 1;
     }
   }
  
  
  for (let i = 0; i < words.length; i++) {
    let copyCharHash = JSON.parse(JSON.stringify(charHash))
    
    let word = words[i]
    for (let j = 0; j < word.length; j++) {
      let letter = word[j]
      if (copyCharHash[letter]) {
        copyCharHash[letter]--
      } else {
        notFormed.push(word)
        break;
      }
    }
  }
  
  let formed = words.filter(word => !notFormed.includes(word));
  
  for (let word of formed) {
    sum += word.length
  }

  return sum
};