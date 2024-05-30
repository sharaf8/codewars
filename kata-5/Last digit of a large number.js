function lastDigit(a, b) {
    if (b === 0n) return 1n;

    const lastDigitA = a % 10n;

    if (lastDigitA === 0n || lastDigitA === 1n || lastDigitA === 5n || lastDigitA === 6n) {
        return lastDigitA;
    }

    const cycles = {
        2: [2n, 4n, 8n, 6n],
        3: [3n, 9n, 7n, 1n],
        4: [4n, 6n],
        7: [7n, 9n, 3n, 1n],
        8: [8n, 4n, 2n, 6n],
        9: [9n, 1n],
    };

    const cycle = cycles[Number(lastDigitA)];

    const effectiveExponent = (b - 1n) % BigInt(cycle.length);

    return cycle[Number(effectiveExponent)];
}