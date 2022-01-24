const arr = [
  [1, 2, 3, 2, 7],
  [4, 5, 6, 8, 1],
  [7, 8, 9, 4, 5]
];

function checkArr(matrix) {
  const startGroup = matrix[0].length - 3;
  const result = [];

  for (let i = 0; i <= startGroup; i++) {
    const part = matrix.flatMap((line) => line.slice(i, i + 3));
    const checkNum = new Set(part);
    if (checkNum.size < 9) {
      result.push(false);
    } else {
      result.push(true);
    }
  }

  return result;
}

console.log(checkArr(arr));