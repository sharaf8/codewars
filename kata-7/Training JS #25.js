function sortIt(arr) {
    const frequencyMap = {};
    for (let num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    const frequencyArray = Object.entries(frequencyMap).map(([num, freq]) => [parseInt(num), freq]);
  
    frequencyArray.sort((a, b) => {
      if (a[1] !== b[1]) {
        return a[1] - b[1];
      } else {
        return b[0] - a[0];
      }
    });
  
    const result = [];
    for (let [num, freq] of frequencyArray) {
      for (let i = 0; i < freq; i++) {
        result.push(num);
      }
    }
  
    return result;
  }
  