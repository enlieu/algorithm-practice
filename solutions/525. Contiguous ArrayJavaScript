/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    if(nums.length === 0){
        return 0
    }
    let hash = {'0': -1}
    let count = 0;
    let distance = 0;
    let maxLength = 0;
    for(let i = 0; i < nums.length; i++){
        // console.log('HASH', hash)
        if(nums[i] === 1){
            count++
        }else{
            count--
        }
        if(hash[count] === undefined){
            hash[count] = i
        }else{
            distance = i - hash[count]
            // console.log('Distance', distance)
            maxLength = Math.max(maxLength, distance)
            // console.log('maxLength', maxLength)
        }
    }
    return maxLength
};