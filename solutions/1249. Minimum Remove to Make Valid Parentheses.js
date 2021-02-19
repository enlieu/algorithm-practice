/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let stack = [];
  let toRemove = new Set();
  let res = ''
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '(' && s[i] !== ')') continue;
​
    if (s[i] === '(') {
      stack.push(i)
    } else if (!stack.length) {
      toRemove.add(i)
    } else {
      stack.pop();
    } 
  }
​
  toRemove = new Set([...stack, ...toRemove])
  
  for (let i = 0; i < s.length; i++) {
    if (!toRemove.has(i)) {
      res += s[i]
    }
  }
  
  return res;
};
