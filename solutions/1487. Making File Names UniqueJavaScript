/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
  let hash = {};
  let arr = [];
  
  for (let i = 0; i < names.length; i++) {
    if (!hash.hasOwnProperty(names[i])) {
      hash[names[i]] = 1
      arr.push(names[i])
    } else {
      while(hash.hasOwnProperty(`${names[i]}(${hash[names[i]]})`)) {
        hash[names[i]] += 1;
      }
      hash[`${names[i]}(${hash[names[i]]})`] = 1
      arr.push(`${names[i]}(${hash[names[i]]})`)
    }
  }

  return arr;
  
};