/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let hash = {};
  let bucket = new Array(nums.length + 1);
  let ans = [];
  for (const num of nums) {
    if (hash.hasOwnProperty(num)) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  }
  
  console.log('HASH', hash)
  
  let entriesArr = Object.entries(hash);
  
  console.log('ENTRIESARR', entriesArr)
  
  //key is the element, val is #
  
  
  for (let [key, val] of entriesArr) {
    if (bucket[val] === undefined) {
      bucket[val] = [];
    }
    bucket[val].push(key);
  }
  
  console.log('BUCKET', bucket)
  
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (ans.length === k) {
      break;
    }
    if (bucket[i] !== undefined) {
      ans = ans.concat(bucket[i]);
    }
  }
  
  console.log('ANS', ans)
  
  return ans;
};