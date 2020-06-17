/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = []
    if(nums === null || nums.length < 3){
        return ans;
    }
    nums.sort((a,b) => a-b)
    //[-4,-1,-1,0,1,2]
    for(let i = 0; i < nums.length-2; i++){
        let leftPtr = i + 1;
        let rightPtr = nums.length - 1;
        if(i > 0 && nums[i] === nums[i-1]){
            continue //da gawd
        }
      while(leftPtr < rightPtr){
            let sum = nums[i] + nums[leftPtr] + nums[rightPtr]
        if(sum === 0){
            ans.push([nums[i], nums[leftPtr], nums[rightPtr]])
            leftPtr++
            while(nums[leftPtr] === nums[leftPtr -1]){
                leftPtr++;
            }
        }else if(sum > 0){
            rightPtr--
        }else{
            leftPtr++
        }
        }
    }
    return ans
};