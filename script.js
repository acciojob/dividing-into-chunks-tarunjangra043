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

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, parseInt(n))));