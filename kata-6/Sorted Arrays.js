function nthSmallest(...n) {
    let a = n.slice(0, -1);
    let b = n.slice(-1)[0];

    let c = a.flat().sort((a, b) => a- b);

    return c[b - 1];
}

