function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
