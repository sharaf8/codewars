function arr2bin(arr){
    if (!arr.every(char => Number.isInteger(char))) return false;
    return arr
        .reduce((a, b) => a + b, 0)
        .toString(2);
}
