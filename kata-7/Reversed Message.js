function reverseMessage(str) {
    return str
        .split(' ')
        .reverse()
        .map(word => {
            let reversedWord = word.split('').reverse().join('').toLowerCase();
            if (/[a-z]/i.test(reversedWord.charAt(0))) {
                reversedWord = reversedWord.charAt(0).toUpperCase() + reversedWord.slice(1);
            }
            return reversedWord;
        })
        .join(' ');
}
