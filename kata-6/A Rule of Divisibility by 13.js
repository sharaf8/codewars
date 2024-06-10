function thirt(n) {
    const sequence = [1, 10, 9, 12, 3, 4];
    
    const computeSum = (num) => {
      const digits = String(num).split('').reverse();
      let sum = 0;
      for (let i = 0; i < digits.length; i++) {
        sum += digits[i] * sequence[i % sequence.length];
      }
      return sum;
    };
  
    let prev = n;
    let current = computeSum(n);
    
    while (current !== prev) {
      prev = current;
      current = computeSum(current);
    }
    
    return current;
  }
  