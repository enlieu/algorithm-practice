/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let start = [0, 0];
  for (let i = 0; i < moves.length; i++){
    let move = moves[i]
    if (move === 'U') {
      start[0] += 1
    } else if (move === 'D') {
      start[0] -= 1
    } else if (move === 'L') {
      start[1] += 1
    } else if (move === 'R') {
      start[1] -= 1
    }
  }
  return start.toString() === [0, 0].toString()
}
  