​
​
var RecentCounter = function() {
  this.requests = [];
};
​
/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1
​
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2)
​
      if (arr[mid] === target) return mid
​
      if (arr[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return left
  }
  
  this.requests.push(t)
  
  let rangeMin = this.requests[this.requests.length - 1] - 3000
  let minIdx = binarySearch(this.requests, rangeMin)
  
  return this.requests.length - minIdx
};
​
/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
