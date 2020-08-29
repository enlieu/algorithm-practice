/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
​
  let operations = new Map([
    ['+', (x, y) => x + y],
    ['-', (x, y) => x - y],
    ['/', (x, y) => Math.trunc(x / y)],
    ['*', (x, y) => x * y]
  ])
​
  let stack = []
  let ops = ['+', '-', '/', '*']
​
  for (const token of tokens) {
    if (operations.has(token)) {
      let oneAgo = stack.pop()
      let twoAgo = stack.pop()
      let operator = operations.get(token)
      stack.push(operator(twoAgo, oneAgo))
    } else {
      stack.push(Number(token))
    }
  }
  
  return stack.pop()
};
