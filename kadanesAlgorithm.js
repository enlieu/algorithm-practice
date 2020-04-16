function kadanesAlgorithm(array) {
  let maxSum = array[0];
  let prevSum = array[0];
  //walking thru the whole array once
  for (let i = 1; i < array.length; i++) {
    if (prevSum < 0) {
      prevSum = array[i];
    } else {
      prevSum += array[i];
    }
    maxSum = Math.max(maxSum, prevSum);
  }
  return maxSum;
}

// kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3])
kadanesAlgorithm([1, 3, -5, 6, -1]);
