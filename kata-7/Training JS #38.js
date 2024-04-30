function findSimilarity(str, word) {
    const regex = new RegExp(`\\b${word[0]}\\w*${word.slice(-1)}\\b`, 'g');

    const similarWords = str.match(regex) || [];

    const filteredWords = similarWords.filter(w => w.length === word.length);

    return filteredWords.join(' ');
}
