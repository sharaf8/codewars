function makePassword(phrase) {
    return phrase.split(' ').map(char => char[0]
        .replace(/i/gi, '1')
        .replace(/o/gi, '0')
        .replace(/s/gi, '5'))
        .join('');
}