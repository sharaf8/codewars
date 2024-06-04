function avgArray(arr) {
    let numColumns = arr[0].length;

    let averages = new Array(numColumns).fill(0);

    for (let col = 0; col < numColumns; col++) {
        let sum = 0;

        for (let row = 0; row < arr.length; row++) {
            sum += arr[row][col];
        }

        averages[col] = sum / arr.length;
    }

    return averages;
}