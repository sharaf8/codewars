function threeInOne(arr){
    const result = [];
    
    const sum = n => n.reduce((a, b) => a + b, 0);
    for(let i = 0; i < arr.length; i+=3) {
      result.push(arr.slice(i, i + 3));
    }
    return result.map(array => sum(array));
  }
  