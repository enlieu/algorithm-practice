/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  let hash = {};
  let start = [0, 0]
  hash[start] = 1
  let pathArr = path.split('')

  for (let direction of pathArr) {
    if (direction === 'N') {
      start[0] += 1
    } else if (direction === 'S') {
      start[0] -= 1
    } else if (direction === 'E') {
      start[1] += 1
    } else if (direction === 'W') {
      start[1] -= 1
    }

    if (hash.hasOwnProperty(start)) {
      return true
    } else {
      hash[start] = 1
    }
  }
  return false;
};