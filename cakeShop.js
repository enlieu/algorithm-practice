function order(takeout, dineIn, served) {
  let takeoutIdx = 0;
  let dineInIdx = 0;
  let combinedArr = [];

  for (let i = 0; i < served.length; i++) {
    if (takeout[takeoutIdx] < dineIn[dineInIdx]) {
      combinedArr.push(takeout[takeoutIdx]);
      takeoutIdx++;
    } else {
      combinedArr.push(dineIn[dineInIdx]);
      dineInIdx++;
    }
  }
  combinedArr = combinedArr
    .concat(takeout.slice(takeoutIdx))
    .concat(dineIn.slice(dineInIdx));

  if (JSON.stringify(combinedArr) == JSON.stringify(served)) {
    return true;
  }
  return false;
}

console.log(order([1, 3, 5], [2, 4, 6], [1, 2, 3, 4, 5, 6])); //true
order([1, 3, 5, 7], [2, 4, 6], [1, 6, 3, 4, 5, 2]); //false
order([1, 3, 8], [2, 4, 6, 9], [3, 5, 8, 6, 7, 1]); //false
order([1, 3, 5, 7], [2, 4, 6, 9], [1, 2, 3, 4, 5, 6, 7, 9]); //true
