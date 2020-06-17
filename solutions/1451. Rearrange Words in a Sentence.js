/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
  let splitText = text.split(' ');
  let newArr = [];
  for (let i = 0; i < splitText.length; i++) {
    newArr.push([splitText[i], splitText[i].length, i])
  }
  let sorted = newArr.sort((a, b) => a[1] - b[1] || a[2] - b[2])
  let newSorted = sorted.map((word) => word[0]).join(' ').toLowerCase()
  let ans = newSorted[0].toUpperCase() + newSorted.slice(1)
  return ans;
};