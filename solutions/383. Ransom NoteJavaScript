/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let hash = {};
  for (let letter of magazine) {
    if (!hash[letter]) {
      hash[letter] = 1;
    } else {
      hash[letter]++
    }
  }

  for (let letter of ransomNote) {
    if (hash[letter]) {
      hash[letter]-- 
    } else {
      return false
      }
    }
  return true;
}