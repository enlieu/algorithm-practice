/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.random = {};
  this.vals = [];
    
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.random.hasOwnProperty(val)) {
      this.random[val] = true
      this.val.push(val)
      return true;
    } else {
      return false;
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.random[val]) {
    delete this.random[val]
    this
    return true;
  } else {
    return false;
  }
    
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return Object.keys(this.random)[Math.floor(Math.random() * Math.floor(Object.keys(this.random).length))]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */