/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let leftPointer = 0;
  let rightPointer = 1;
  let count = 1;
  let splitArray = S.split('')
  
  while (rightPointer < splitArray.length) {
    if (splitArray[leftPointer] === splitArray[rightPointer]) {
      count++
      splitArray.splice(leftPointer, count)
      leftPointer = 0;
      rightPointer = 1
      count = 1;
    } else {
      leftPointer++
      rightPointer++
    }
  }
  
  return splitArray.join('')
  
  
  /* 
  const removeDuplicates = s => {
  const stack = [];
  for (const char of s) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
  }
  return stack.join(''); 
  };
  */


};