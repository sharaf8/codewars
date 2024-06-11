var solution = function(firstArray, secondArray) {
    let result = 0;
    for (let i = 0; i < firstArray.length; i++) {
      let difference = Math.abs(firstArray[i] - secondArray[i]);
      result += difference ** 2;
    }
    
    result = result / firstArray.length;
    
    return result;
  }