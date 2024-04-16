function lastDigit(n, d) {
    const digits = n.toString().split('').map(Number);
    const startIndex = Math.max(0, digits.length - d);
    return digits.slice(startIndex);
}
