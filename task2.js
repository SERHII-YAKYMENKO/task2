const b = [
  [1, 2, 3, 2, 7],
  [4, 5, 6, 8, 1],
  [7, 8, 9, 4, 5]
];

function check(arr) {
  const elems = {};
  for (let el of arr) {
    if (elems[el] !== undefined) {
      return false;
    }
    // elems[el] = true;
    // console.log(el);
  }
  return true;
}

function move(arr) {
  for (let i = 0; i < arr[0].length - 2; i++) {
    const subarr = [
      arr[0][i],
      arr[0][i + 1],
      arr[0][i + 2],
      arr[1][i],
      arr[1][i + 1],
      arr[1][i + 2],
      arr[2][i],
      arr[2][i + 1],
      arr[2][i + 2]
    ];
    console.log(subarr);

    if (!check(subarr)) {
      return false;
    }
  }
  return true;
}
console.log(move(b));