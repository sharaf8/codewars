function Pangram(str) {
    const al = 'abcdefghijklmnopqrstuvwxyz';
    const letters = new Set();

    for (const char of str.toLowerCase()) {
        if (al.includes(char)) {
            letters.add(char);
        }
    }

    return letters.size === al.length;
}