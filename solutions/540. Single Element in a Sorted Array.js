/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNonDuplicate = function(nums) {
    let left = 0
    let right = nums.length - 1;
    let mid
    while(left < right) {
      mid = Math.floor((left + right) / 2);
      if(mid % 2 === 1) mid--;
      if(nums[mid] === nums[mid + 1]) left = mid + 2;
      else right = mid;
    }
  return nums[left];
};
    //[1,1,2,3,3,4,4,8,8]
    //left       = 0 , 0 , 0   , 2 
    //right      = 8 , 4 , 2   , 2
    //mid        = 4 , 2 , 1(0)
    //num[mid]   = 3 , 2 , 1
    //num[mid+1] = 4 , 3 , 1
    
    //[3,3,7,7,10,11,11]
    //left       = 0   , 4   , 4   
    //right      = 6   , 6   , 4   
    //mid        = 3(2), 5(4), 
    //num[mid]   = 7   , 10  , 
    //num[mid+1] = 7   , 11  , 

// var singleNonDuplicate = function (nums) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     let mid = Math.floor(left + (right - left) / 2);
//     if (nums[mid] === nums[mid - 1]) {
//       let length = mid - 1;
//       if (length % 2 === 1) {
//         right = mid - 2;
//       } else {
//         left = mid + 1;
//       }
//     } else if (nums[mid] === nums[mid + 1]) {
//       let length = nums.length - (mid + 1);
//       if (length % 2 === 1) {
//         left = mid + 2;
//       } else {
//         right = mid - 1;
//       }
//     } else {
//       return nums[mid];
//     }
//     return nums[left];
//   }
// };