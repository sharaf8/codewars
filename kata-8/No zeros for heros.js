function noBoringZeros(n) {
    if (n === 0) return 0;

    const trimmed = n.toString().replace(/0+$/, '');

    return parseInt(trimmed, 10);
}
