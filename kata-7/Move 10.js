function moveTen(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (alphabet.includes(char.toLowerCase())) {
            const newIndex = (alphabet.indexOf(char.toLowerCase()) + 10) % 26;
            const newChar = alphabet[newIndex];
            result += (char === char.toUpperCase()) ? newChar.toUpperCase() : newChar;
        } else {
            result += char;
        }
    }

    return result;
}
