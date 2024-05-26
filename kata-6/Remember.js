function remember(str) {
    const charCount = {};
    const result = [];

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] === 2) {
            result.push(char);
        }
    }

    return result;
}
