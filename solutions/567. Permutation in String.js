/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const s1Arr = Array(26).fill(0), s2Arr = Array(26).fill(0);
    const aIndex = 'a'.charCodeAt(0);
    for (let i = 0; i < s1.length; i++) {
        s1Arr[s1.charCodeAt(i) - aIndex]++;
        s2Arr[s2.charCodeAt(i) - aIndex]++;
    }
    let j = s1.length;
    while (j <= s2.length) {
        const char = s2[j];
        if (s1Arr.toString() === s2Arr.toString()) return true;
        const prevChar = s2[j - s1.length];
        s2Arr[s2.charCodeAt(j)-aIndex]++;
        s2Arr[s2.charCodeAt(j - s1.length)-aIndex]--;
        j++;
    }
    return false;
};
// var checkInclusion = function(s1, s2) {
//   let s1Hash = {}
//   for (let i = 0; i < s1.length; i++) {
//     if (!s1Hash.hasOwnProperty(s1[i])) {
//       s1Hash[s1[i]] = 1
//     } else {
//       s1Hash[s1[i]]++
//     }
//   }
//   let s2Arr = {};
//   for (let i = 0; i < s2.length; i++) {
//     s2Arr.push(s2[i])
//     if (s2Arr.length === s1.length) {
//       console.log(s2Arr)
//     }
//   }
  
//   console.log(s1Hash)
// };