function findMissingLetter(array) {
    for (let i = 0; i < array.length - 1; i++) {
        const currentCharCode = array[i].charCodeAt(0);
        const nextCharCode = array[i + 1].charCodeAt(0);

        if (nextCharCode - currentCharCode > 1) {
            return String.fromCharCode(currentCharCode + 1);
        }
    }
}
