function dataReverse(data) {
    const res = [];
    
    for (let i = 0; i < data.length; i += 8) {
      res.push(data.slice(i, i + 8));
    }
    
    return res.reverse().flat();
  }
  