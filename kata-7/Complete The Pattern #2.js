function pattern(n) {
    if (n < 1) {
        return "";
    }
    let result = "";
    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= i; j--) {
            result += j;
        }
        if (i < n) {
            result += "\n";
        }
    }
    return result;
}
