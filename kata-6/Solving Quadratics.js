function solveQuadratic(a, b, c) {
    if (a === 0) return b === 0 ? (c === 0 ? [0] : undefined) : [-c / b || 0];

    const d = b ** 2 - 4 * a * c;
    if (d < 0) return undefined;

    const sqrtD = Math.sqrt(d);
    const x1 = (-b + sqrtD) / (2 * a);
    const x2 = (-b - sqrtD) / (2 * a);

    return d === 0 ? [x1 || 0] : [x2 || 0, x1 || 0];
}