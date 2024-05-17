function hammingDistance(a, b) {
    let binA = a.toString(2);
    let binB = b.toString(2);

    const maxLength = Math.max(binA.length, binB.length);
    binA = binA.padStart(maxLength, '0');
    binB = binB.padStart(maxLength, '0');

    let distance = 0;
    for (let i = 0; i < maxLength; i++) {
        if (binA[i] !== binB[i]) {
            distance++;
        }
    }

    return distance;
}