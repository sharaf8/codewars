function buildRowText(index, character) {
    let result = '|';
    for (let i = 0; i < 9; i++) {
        if (i === index) {
            result += character;
        } else {
            result += ' ';
        }
        result += '|';
    }
    return result;
}
