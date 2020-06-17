/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // let paddedS = '#' + s.split('').join('#') + '#';
    let paddedS = '#' + s.split('').join('#') + '#';
    
    bestCenter = -1;
    maxLen = 0;
    
    for(let center = 0; center < paddedS.length; center++){
        let radius = 0;
        while(center + radius + 1 < paddedS.length && center - radius - 1 >= 0 &&
        paddedS.charAt(center + radius + 1) == paddedS.charAt(center - radius -1)) radius ++;
        if(radius > maxLen) {
            bestCenter = center;
            maxLen = radius;
        }
    }
    return s.slice((bestCenter-maxLen)/2, (bestCenter+maxLen)/2);
};