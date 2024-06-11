function compose(...funcs) {
    return function(initialValue) {
      return funcs.reduceRight((accumulator, currentFunc) => {
        return currentFunc(accumulator);
      }, initialValue);
    };
  }
  
  // Example usage:
  const addOne = a => a + 1;
  const multTwo = b => b * 2;
  
  const addOneMultTwo = compose(multTwo, addOne);
  