function orSum(n) {
    let s = 0n;
    for (let i = 0n; 1n << i <= n; i++) {
        s += (n & 1n << i ? n : n >> i + 1n << i) << i;
    }
    return s;
}
