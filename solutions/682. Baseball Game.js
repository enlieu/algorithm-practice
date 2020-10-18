/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let res = [];
  
  for (const op of ops) {
    if (!isNaN(op)) {
      res.push(op)
    } else if (op === '+') {
      res.push(Number(res[res.length-1]) + Number(res[res.length-2]))
    } else if (op === 'D') {
      res.push(Number(res[res.length-1]) * 2)
    } else {
      res.pop();
    }
  }
  
  return res.reduce((a, b) => Number(a) + Number(b))
};
​
​
​
​
​
​
