function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    const arr = buildArray(num);
    const result = arr.reduce((a, b) => a * b);
    console.log(result);
    return result;
  }
}

function buildArray(num) {
  var result = [];
  for (let i = 1; i <= num; i++) {
    result.push(i);
  }
  return result;
}

factorialize(5);
