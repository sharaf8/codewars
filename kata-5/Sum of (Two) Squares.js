function allSquaredPairs(n) {
    const result = [];
    for (let i = 0; i <= Math.sqrt(n); i++) {
        const squareI = i * i;
        const diff = n - squareI;
        const sqrtDiff = Math.sqrt(diff);
        if (Number.isInteger(sqrtDiff) && sqrtDiff >= i) {
            result.push([i, sqrtDiff]);
        }
    }
    return result;
}
