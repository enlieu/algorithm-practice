
var StockSpanner = function(price) {
  this.history = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  this.history.push(price);
  
  let count = 0
  
  if (this.history.length === 1) return 1
  
  for (let i = this.history.length - 1; i >= 0; i--) {
    if (price >= this.history[i]) {
      count++
    } else {
      break;
    }
  }
  
  return count;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */