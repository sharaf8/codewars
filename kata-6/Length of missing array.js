function getLengthOfMissingArray(arr) {
    if (!arr || arr.length === 0 || arr.some(subArr => !subArr || subArr.length === 0)) {
      return 0;
    }
  
    const sortedArrays = arr.sort((a, b) => a.length - b.length);
  
    let expectedLength = sortedArrays[0].length;
    for (let i = 0; i < sortedArrays.length; i++) {
      if (sortedArrays[i].length !== expectedLength) {
        return expectedLength;
      }
      expectedLength++;
    }
  
    return 0;
  }
  