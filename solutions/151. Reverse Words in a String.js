/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(sentence) {
  let trimmedSentence = sentence.trim();
  let split = trimmedSentence.split(' ')
  let filtered = split.filter((word) => word !== '')
  
  let left = 0;
  let right = filtered.length - 1
  
  while (left < right) {
    [filtered[left], filtered[right]] = [filtered[right], filtered[left]]
    left++
    right--
  }
  
  return filtered.join(' ')
};