function pyramid(n) {
    if (n < 1) return [];
    const result = [];
    for (let i = 1; i <= n; i++) {
        const subarray = Array(i).fill(1);
        result.push(subarray);
    }
    return result;
}
