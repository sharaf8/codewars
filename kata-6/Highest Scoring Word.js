function high(str) {
    const words = str.split(' ');
    let maxScore = 0;
    let maxWord = '';

    const calculateScore = word => {
        let score = 0;
        for (let i = 0; i < word.length; i++) {
            score += word.charCodeAt(i) - 96;
        }
        return score;
    };

    for (const word of words) {
        const score = calculateScore(word);
        if (score > maxScore) {
            maxScore = score;
            maxWord = word;
        }
    }

    return maxWord;
}
