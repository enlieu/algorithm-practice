/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    
  this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function(nums) {
  return this.nums
    
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let shuffling = [...this.nums]
  
  for (let i = 0; i < shuffling.length; i++) {
    const newPos = Math.floor(Math.random() * (i + 1));
    let tmp = shuffling[i];
    shuffling[i] = shuffling[newPos]; 
    shuffling[newPos] = tmp;
  }
  
  return shuffling
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */