/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowest = prices[0];
    let result = 0
    
    for (let i = 1; i < prices.length; i++) {
        lowest = Math.min(lowest, prices[i]);
        result = Math.max(result, prices[i] - lowest)
    }
    
    return result;
};