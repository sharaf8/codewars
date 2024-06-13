function lengthOfSequence(arr, num) {
  let count = 0;
  let firstIndex = -1;
  let secondIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
      if (firstIndex === -1) {
        firstIndex = i;
      } else if (secondIndex === -1) {
        secondIndex = i;
      }
    }
  }

  if (count !== 2) {
    return 0;
  }

  return secondIndex - firstIndex + 1;
}
