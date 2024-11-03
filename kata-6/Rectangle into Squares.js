function aa(a, b) {
    if (a === b) return null;

    const res = [];

    while (a > 0 && b > 0) {
        const squareSize = Math.min(a, b);
        res.push(squareSize);

        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }

    return res;
}
