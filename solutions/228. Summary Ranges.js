/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = [];
    
    let start = nums[0]
    let next;
    
    for(let i = 0; i < nums.length; i++) {
        let num1 = nums[i]
        let num2 = nums[i+1]
        if (num1+1 === num2) {
            continue;
        } else {
            next = num1;
            let interval = start !== next ? `${start}->${next}` : next.toString()
            res.push(interval);
            start = num2;
        }
    }
    
    return res;
};
