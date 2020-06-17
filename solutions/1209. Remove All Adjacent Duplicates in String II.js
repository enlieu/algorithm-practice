/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  let stack = [];
  
  // 'deeedbbcccbdaa'
  
  for (let i = 0; i < s.length; i++) {
    //if there's something in the stack, and current character is equal to the letter in stack
    if (stack.length && s[i] === stack[stack.length-1][0]) {
      //increment the number by one
      stack[stack.length-1][1] += 1
    } else {
      //push the element into the stack as an array with element + element count
      stack.push([s[i], 1])
    }  
    //if the array in stack has frequency of k, then pop it off
    if (stack[stack.length -1][1] === k) {
      stack.pop();
    }
  }
    
    let ans = ''
    //generate the ans string using characters remaining in the stack
    for (let i = 0; i < stack.length; i++) {
      ans += stack[i][0].repeat(stack[i][1])
    }
    
    return ans;
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   while (right < split.length) {
//     if (split[left] === split[right]) {
//       right++
//       count++
//     } else {
//       left++
//       right++
//     }
    
//     if (count === k) {
//       split.splice(left, count)
//       count = 1
//       left = 0;
//       right = 1
//     }
//   }
  
//   return split.join('')

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   let left = 0;
//   let right = 1;
//   let count = 1;
  
//   let split = s.split('')
  
//   while (right < split.length) {
//     if (split[left] === split[right]) {
//       right++
//       count++
//     } else {
//       left++
//       right++
//     }
    
//     if (count === k) {
//       split.splice(left, count)
//       count = 1
//       left = 0;
//       right = 1
//     }
//   }
//   return split.join('')
// };