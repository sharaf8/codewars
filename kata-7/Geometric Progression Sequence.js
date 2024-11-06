function geometricSequenceElements(a, r, n) {
    const res = [];

    for (let i = 0; i < n; i++) {
        res.push(a * Math.pow(r, i));
    }

    return res.join(', ');
}
