function getTheVowels(word) {
    const vowels = 'aeiou';
    let currentVowelIndex = 0;
    let consecutiveCount = 0;

    for (let char of word) {
        if (char === vowels[currentVowelIndex]) {
            consecutiveCount++;
            currentVowelIndex = (currentVowelIndex + 1) % vowels.length;
        }
    }

    return consecutiveCount;
}
