function sortByBit(arr) {
    const countBits = (num) => num.toString(2).split('0').join('').length;
  
    arr.sort((a, b) => {
      const aBits = countBits(a);
      const bBits = countBits(b);
  
      if (aBits === bBits) {
        return a - b;
      }
  
      return aBits - bBits;
    });
  
    return arr;
  }
  