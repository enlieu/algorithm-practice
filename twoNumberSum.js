function twoNumberSum(array, targetSum) {
  let cache = {};
  for (let i = 0; i < array.length; i++) {
    let difference = targetSum - array[i];
    if (difference in cache) {
      return [difference, array[i]];
    } else {
      cache[array[i]] = true;
    }
  }
  return [];
}

twoNumberSum([4, 6, 1], 5);
twoNumberSum([4, 6, 1, -3], 3);
