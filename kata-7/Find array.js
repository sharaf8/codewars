function findArray(arr1, arr2){
    const result = [];
    
    for (let nums of arr2) {
      if (nums < arr1.length && nums >= 0) {
        result.push(arr1[nums]);
      }
    }
    
    return result;
  }