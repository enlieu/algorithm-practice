/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (nums.length < 3) return Math.max(...nums);
    let noDupes = new Set(nums)
    if(noDupes.size<3) return Math.max(...noDupes);
    
    for(let i=0;i<2;i++){
        noDupes.delete(Math.max(...noDupes))
    }
    
    return Math.max(...noDupes);
};