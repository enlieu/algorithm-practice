/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  version1 = version1.split('.').map(num => parseInt(num, 10))
  version2 = version2.split('.').map(num => parseInt(num, 10))
  
  let i = 0;
  let j = 0;
  
  while (i < version1.length && j < version2.length) {
    if (version1[i] > version2[j]) {
      return 1
    }
    if (version2[j] > version1[i]) {
      return -1
    }
    i++
    j++
  }
  
  while (j < version2.length) {
    if (version2[j] > 0) {
      return -1
    }
    j++
  }
  
  while (i < version1.length) {
    if (version1[i] > 0) {
      return 1
    }
    i++
  }
  
  return 0
  
};
