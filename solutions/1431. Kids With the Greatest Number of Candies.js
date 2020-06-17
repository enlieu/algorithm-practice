/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let maxNumCandies = Math.max(...candies)
  let ans = []
  
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxNumCandies) {
      ans.push(true)
    } else {
      ans.push(false);
    }
  }
  return ans;
};