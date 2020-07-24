/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (!heights.length) return 0
  
  let maxArea = -Infinity
  
  for (let i = 0; i < heights.length; i++) {
    let minHeight = Infinity
    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j])
      let width = j - i + 1
      maxArea = Math.max(maxArea, width * minHeight)
    }
  }
  
  return maxArea
};