function primeFactors(n) {
    const factors = [];

    for (let divisor = 2; divisor <= n; divisor++) {
        if (n % divisor === 0) {
            let count = 0;
            for (; n % divisor === 0; n /= divisor) {
                count++;
            }
            factors.push([divisor, count]);
        }
    }

    return factors.map(([prime, count]) => {
        if (count === 1) return `(${prime})`;
        return `(${prime}**${count})`;
    }).join('');
}