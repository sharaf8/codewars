function sortArray(array) {
    const oddNumbers = [];

    array.forEach(num => {
        if (num % 2 !== 0) {
            oddNumbers.push(num);
        }
    });
    oddNumbers.sort((a, b) => a - b);

    const result = array.map(num => {
        if (num % 2 !== 0) {
            return oddNumbers.shift();
        }
        return num;
    });

    return result;
}
