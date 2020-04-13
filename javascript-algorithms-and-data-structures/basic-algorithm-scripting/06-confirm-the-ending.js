function confirmEnding(str, target) {
  const stringLength = str.length;
  const targetLength = target.length;
  const ending = str.substring((stringLength - targetLength),stringLength);

  return target === ending;
}

confirmEnding("Bastian", "n");
