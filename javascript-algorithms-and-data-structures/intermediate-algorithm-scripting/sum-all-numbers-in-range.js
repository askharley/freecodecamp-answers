function sumAll(arr) {
  const newArray = determineOrder(arr[0], arr[1]);
  const result = newArray.reduce((a, b) => a + b);
  return result;
}

function determineOrder(a, b) {
  return (a < b)
    ? buildArray(a, b)
    : buildArray(b, a)
}

function buildArray(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

sumAll([1, 4]);
