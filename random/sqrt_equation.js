function sqrt_equation(a, b, c) {
    const d = Math.pow(b, 2) - 4 * a * c;

    if (d < 0) return 'NO RESULT';

    const isPerfect = Number.isInteger(Math.sqrt(d));
    const dSqrt = Math.sqrt(d);

    if (isPerfect) {
        const x1 = (-b + dSqrt) / (2 * a);
        const x2 = (-b - dSqrt) / (2 * a);
        return d === 0 ? `${x1}` : `${x1} ${x2}`;
    } else {
        const numerator = `-${b} ± √${d}`;
        const denominator = 2 * a;
        return `(${numerator}) / ${denominator}`;
    }
}

console.log(sqrt_equation(2, 10, 4));