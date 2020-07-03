/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
  let temp = [...cells]
  for (let j = 0; j < (N-1) % 14 + 1; j++) {
    for (let i = 0; i < cells.length; i++) {
      if (cells[i + 1] === 0 && cells[i - 1] === 0 || cells[i - 1] === 1 && cells[i + 1] === 1) {
        temp[i] = 1
      } else {
        temp[i] = 0
      }
    }
    cells = [...temp]
  }
  return temp;
};