function topKFrequent(anArr, k) {
  let frequencyObj = {};

  let result = [];
  for (let i = 0; i < anArr.length; i++) {
    if (frequencyObj[anArr[i]] === undefined) {
      frequencyObj[anArr[i]] = 1;
    } else {
      frequencyObj[anArr[i]]++;
    }
  }

  for (let i = 0; i < k; i++) {
    let maxFrequency = Math.max(...Object.values(frequencyObj));

    let wordArray = [];
    for (let key in frequencyObj) {
      if (frequencyObj[key] === maxFrequency) {
        wordArray.push(key);
        delete frequencyObj[key];
        wordArray.sort();
      }
    }
    result.push(...wordArray);
  }
  return result.slice(0, k);
}

topKFrequent(
  [
    "the",
    "day",
    "is",
    "ax",
    "ax",
    "ax",
    "sunny",
    "the",
    "the",
    "the",
    "sunny",
    "is",
    "is",
    "ai",
    "ai",
    "ai",
  ],
  4
);
