function findSequences(n) {
    const result = [];
    
    for (let start = 1; start < n; start++) {
      let sum = 0;
      let sequence = [];
      
      for (let i = start; sum < n; i++) {
        sum += i;
        sequence.push(i);
        
        if (sum === n) {
          result.push([...sequence]);
          break;
        }
      }
    }
    
    return result.sort((a, b) => a.length - b.length);
  }
  