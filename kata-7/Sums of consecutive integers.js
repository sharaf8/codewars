function position(x, y, n) {
    const average = y / x;

    const first = average - Math.floor((x - 1) / 2);

    return Math.floor(first + n);
}
