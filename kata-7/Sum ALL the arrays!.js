function arraySum(arr) {
    let total = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (Array.isArray(element)) {
        total += arraySum(element);
      } else if (typeof element === 'number') {
        total += element;
      }
    }
  
    return total;
  }
  