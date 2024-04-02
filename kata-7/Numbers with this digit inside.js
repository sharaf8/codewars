function numbersWithDigitInside(x, d) {
    if (x === 0) return [0, 0, 0];

    const numbers = [];
    for (let i = 1; i <= x; i++) {
        if (i.toString().includes(d.toString())) {
            numbers.push(i);
        }
    }

    if (numbers.length === 0) return [0, 0, 0];

    const count = numbers.length;
    const sum = numbers.reduce((a, b) => a + b, 0);
    const product = numbers.reduce((a, b) => a * b, 1);

    return [count, sum, product];
}
