/**
 * @param {string} homepage
 */



var BrowserHistory = function(homepage) {
  
    this.currentIndex = 0
  
    this.history = [homepage];
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.history.splice(this.currentIndex + 1, 0, url)
    this.currentIndex += 1
    this.history = this.history.slice(0, this.currentIndex + 1)
    
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.currentIndex -= steps
   if (this.currentIndex < 0) {
    this.currentIndex = 0
    return this.history[this.currentIndex]
  } else {
    return this.history[this.currentIndex]  
  }
    
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  this.currentIndex += steps
  if (this.currentIndex > this.history.length - 1) {
    this.currentIndex = this.history.length - 1
    return this.history[this.currentIndex]
  } else {
    return this.history[this.currentIndex]  
  }
    
};
/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */