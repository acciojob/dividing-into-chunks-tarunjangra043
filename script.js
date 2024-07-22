const divide = (arr, n) => {
  const result = [];
  let currentSum = 0;
  let currentChunk = [];

  for (let num of arr) {
    if (currentSum + num > n) {
      result.push(currentChunk);
      currentSum = 0;
      currentChunk = [];
    }

    currentSum += num;
    currentChunk.push(num);

    if (currentSum === n) {
      result.push(currentChunk);
      currentSum = 0;
      currentChunk = [];
    }
  }

  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
};