/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  let map = new Map();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let num = 1;
  for (let i = 0; i <= 26; i++) {
    map.set(num, alphabet[i])
    num += 1
  }
  
  const stack = [];
  
  for (const char of s) {
    if (char !== '#') {
      stack.push(char);
      continue;
    }
    const secondDigit = stack.pop();
    const firstDigit = stack.pop();
    stack.push(map.get(Number(firstDigit + secondDigit)))
  }
  
  for (let i = 0; i < stack.length; i++) {
    if (!isNaN(stack[i])) {
      stack[i] = map.get(Number(stack[i]))
    }
  }
  
  return stack.join('')
};
