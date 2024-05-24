function firstNonRepeated(s) {
    const low = s.toLowerCase();
    const count = {};

    for (const char of low) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (count[low[i]] === 1) return s[i];
    }

    return null;
}
