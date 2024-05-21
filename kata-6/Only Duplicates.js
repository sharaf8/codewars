function onlyDuplicates(str) {
    let dub = {};
    for (const word of str) {
        dub[word] = (dub[word] || 0) + 1;
    }
    let result = '';
    for (const char of str) {
        if (dub[char] > 1) {
            result += char;
        }
    }
    return result;
}
