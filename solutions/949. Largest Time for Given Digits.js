/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
  
  const permute = function(nums, set = [], answers = []) {
    if (!nums.length) answers.push([...set])
​
    for (let i = 0; i < nums.length; i++) {
      const newNums = nums.filter((n, index) => index !== i)
      set.push(nums[i]);
      permute(newNums, set, answers)
      set.pop()
    }
    return answers
  };
  
  let times = permute(A)
  
  let valid = []
  
  for (let i = 0; i < times.length; i++) {
    if (`${times[i][0]}${times[i][1]}`<= 23 && `${times[i][2]}${times [i][3]}` <= 59) {
      valid.push(times[i].join(''))
    }
  }
  
  valid.sort((a, b) => Number(b) - Number(a))
​
  return valid.length === 0 ? '' : `${valid[0].slice(0, 2)}:${valid[0].slice(2)}`
};
​
