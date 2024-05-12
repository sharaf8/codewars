function findMissingNumbers(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const missingNumbers = [];

    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            missingNumbers.push(i);
        }
    }

    return missingNumbers;
}
