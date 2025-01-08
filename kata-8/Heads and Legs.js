function animals(heads, legs) {
    if (heads === 0 && legs === 0) {
        return [0, 0];
    }

    if (heads < 0 || legs < 0 || legs % 2 !== 0) {
        return "No solutions";
    }

    const cows = (legs - 2 * heads) / 2;
    const chickens = heads - cows;

    if (!Number.isInteger(cows) || !Number.isInteger(chickens) || cows < 0 || chickens < 0) {
        return "No solutions";
    }

    return [chickens, cows];
}