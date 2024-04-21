function shadesOfGrey(n) {
    if (n <= 0) {
        return [];
    }

    if (n > 254) {
        n = 254;
    }

    function padZero(hex) {
        return hex.length < 2 ? '0' + hex : hex;
    }

    const result = [];

    for (let i = 1; i <= n; i++) {
        const hex = padZero(i.toString(16));
        result.push(`#${hex}${hex}${hex}`);
    }

    return result;
}
