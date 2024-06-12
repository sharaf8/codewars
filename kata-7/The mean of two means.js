function getMean(arr, x, y) {
    if (x < 2 || y < 2 || x > arr.length || y > arr.length) return -1;
  
    const xArr = arr.slice(0, x);
  
    const yArr = arr.slice(arr.length - y);
  
    const mean = n => n.reduce((a, b) => a + b, 0) / n.length;
  
    return (mean(xArr) + mean(yArr)) / 2;
  }
  