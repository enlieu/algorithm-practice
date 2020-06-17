/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  let ans = [];
  //closest number with larger index, lesser value
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      //if the price at i is greater than any index after it, push it into ans
      if (prices[i] >= prices[j]) {
        ans.push(prices[i] - prices[j])
        break;
      } else if (j === prices.length - 1) {
        ans.push(prices[i])
      }
    }
  }
  ans.push(prices[prices.length - 1])
  return ans;
};