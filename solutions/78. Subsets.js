/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let sets = [[]];
  
  const backtrack = (idx, current) => {
    for (let i = idx; i < nums.length; i++) {
      current.push(nums[i])
      sets.push([...current])
      backtrack(i + 1, current)
      current.pop()
    }
  }
  
  backtrack(0, [])
  return sets
};