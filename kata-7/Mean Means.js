function geo_mean(numbers, arithmeticMean) {
    const sumOfNumbers = numbers.reduce((sum, num) => sum + num, 0);
  
    const n = numbers.length + 1;
  
    const totalSum = arithmeticMean * n;
  
    const missingNumber = totalSum - sumOfNumbers;
  
    numbers.push(missingNumber);
  
    const productOfNumbers = numbers.reduce((product, num) => product * num, 1);
  
    const geometricMean = Math.pow(productOfNumbers, 1 / n);
  
    return geometricMean;
  }
  