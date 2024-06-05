const sumAverage = (arr) => {
    const minNum = array => array.reduce((a, b) => a + b, 0) / array.length;
    let result = 0;

    for (const arrays of arr) {
        result += minNum(arrays);
    }

    return Math.floor(result);
}
