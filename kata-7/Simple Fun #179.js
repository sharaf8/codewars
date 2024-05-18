function fraction(a, b) {
    const c = [];
    for (let i = 1; i <= a; i++) {
        if (a % i === 0 && b % i === 0) c.push(i);
    }
    const gcd = c[c.length - 1];
    a = a / gcd;
    b = b / gcd;
    return a + b;
}
