function pofi(n) {
    const remainders = ["1", "i", "-1", "-i"];
    const remainder = n % 4;
    return remainders[remainder];
}
