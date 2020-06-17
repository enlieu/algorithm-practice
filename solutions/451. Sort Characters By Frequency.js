/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let freq = {}
    let str = '';
    
    for (let i = 0; i < s.length; i++) {
        if (!freq[s[i]]) {
            freq[s[i]] = 1
        } else {
             freq[s[i]]++
        }
    }

    let sortedArr = Object.entries(freq).sort((a, b) => b[1] - a[1])

    sortedArr.forEach((freqArr => str += freqArr[0].repeat(freqArr[1])))

    return str
};

