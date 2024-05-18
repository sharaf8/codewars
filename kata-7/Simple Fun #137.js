function S2N(m, n) {
    let result = 0;
    for (let i = 0 ; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            result += Math.pow(i, j);
        }
    }
    return result;
}
