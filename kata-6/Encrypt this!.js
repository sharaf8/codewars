function encryptThis(str) {
    return str.split(' ').map(word => {
        let firstLetterAscii = word[0].charCodeAt(0).toString();

        if (word.length === 1) {
            return word.charCodeAt(0);
        }

        if (word.length === 2) {
            return word.charCodeAt(0) + word[1];
        }

        return word.charCodeAt(0) + word[word.length - 1] + word.slice(2, -1) + word[1];
    }).join(' ');
}
