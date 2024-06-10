function upArray(arr) {
    for (const num of arr) {
      if (num < 0 || num > 9 || !Number.isInteger(num)) {
        return null;
      }
    }
  
    if (arr.length === 0) {
      return null;
    }
  
    let carry = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
      let newVal = arr[i] + carry;
      if (newVal === 10) {
        arr[i] = 0;
        carry = 1;
      } else {
        arr[i] = newVal;
        carry = 0;
        break;
      }
    }
  
    if (carry === 1) {
      arr.unshift(1);
    }
  
    return arr;
  }