function max(iterable) {
    let maxValue;
    for (const value of iterable) {
        if (maxValue === undefined || value > maxValue) {
            maxValue = value;
        }
    }
    return maxValue;
}

function min(iterable) {
    let minValue;
    for (const value of iterable) {
        if (minValue === undefined || value < minValue) {
            minValue = value;
        }
    }
    return minValue;
}
