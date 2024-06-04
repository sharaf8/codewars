function arrAdder(arr) {
    let numColumns = arr[0].length;

    let words = [];

    for (let col = 0; col < numColumns; col++) {
        let word = '';

        for (let row = 0; row < arr.length; row++) {
            word += arr[row][col];
        }

        words.push(word.trim());
    }

    return words.join(' ');
}
