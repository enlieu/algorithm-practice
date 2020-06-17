/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let opening = '({['
    let closing = ')}]'
    let hash = {
   '(': ')',
   '{': '}',
   '[': ']'
  }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (opening.includes(s[i])) {
            stack.push(s[i])
        } else if (closing.includes(s[i])) {
            if (stack.length === 0) {
                return false
            }
            if (hash[stack[stack.length - 1]] === s[i]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};