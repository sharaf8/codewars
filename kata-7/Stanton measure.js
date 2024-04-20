function stantonMeasure(arr) {
    const countOfOnes = arr.filter(num => num === 1).length;
    return arr.filter(num => num === countOfOnes).length;
}
