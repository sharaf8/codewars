function gap(num) {
    const binaryStr = num.toString(2);

    const gaps = binaryStr.split('1');

    if (binaryStr.endsWith('0')) {
        gaps.pop();
    }
    if (binaryStr.startsWith('0')) {
        gaps.shift();
    }

    let longestGap = 0;
    for (let gap of gaps) {
        if (gap.length > longestGap) {
            longestGap = gap.length;
        }
    }

    return longestGap;
}
