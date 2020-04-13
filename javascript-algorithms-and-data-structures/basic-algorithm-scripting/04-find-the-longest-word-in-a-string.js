function findLongestWordLength(str) {
  let length = 0;
  const arr = buildArray(str);
  
  arr.map(element => {
    if (element.length > length) length = element.length;
  });

  return length;
}

function buildArray(str) {
  return str.split(" ");
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
