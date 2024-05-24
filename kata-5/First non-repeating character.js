function firstNonRepeatingLetter(s) {
    const lowerCaseStr = s.toLowerCase();
    const charCount = {};

    for (const char of lowerCaseStr) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (charCount[lowerCaseStr[i]] === 1) {
            return s[i];
        }
    }

    return "";
}
