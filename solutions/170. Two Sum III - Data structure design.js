/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
  this.obj = {};
};
​
/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  this.obj[number] ? this.obj[number] += 1 : this.obj[number] = 1
};
​
/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  let copy = {...this.obj}
  let objkeys = Object.keys(copy)
  
  for (let i = 0; i < objkeys.length; i++)  {
    let num1 = objkeys[i]
    copy[num1]--
    let complement = value - num1
    if (copy[complement] > 0) return true;
  }
  
  return false
};
​
/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
