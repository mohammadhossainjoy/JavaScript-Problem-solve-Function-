function lastElement(num) {
  if (num.length === 0) {
    return undefined;
  }
  return num[num.length - 1];
}
console.log(lastElement([1, 2, 3, 4]));
