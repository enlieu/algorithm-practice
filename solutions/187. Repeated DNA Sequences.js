/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  if (!s.length) return [];
  
  let map = new Map();
  
  for (let i = 0; i < s.length; i++) {
    let substr = s.slice(i, i + 10)
    if (substr.length === 10) map.set(substr, map.get(substr) + 1 || 1)
  }
  
  return [...map.entries()].filter((ele) => ele[1] > 1).map((ele) => ele[0])
};
