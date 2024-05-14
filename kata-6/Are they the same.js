function comp(a, b) {
    if (!a || !b) {
        return false;
    }

    if (a.length === 0 && b.length === 0) {
        return true;
    }

    if (a.length !== b.length) {
        return false;
    }

    const freqMap = {};
    for (const num of a) {
        const square = num * num;
        freqMap[square] = (freqMap[square] || 0) + 1;
    }

    for (const num of b) {
        if (!freqMap[num] || freqMap[num] === 0) {
            return false;
        }
        freqMap[num]--;
    }

    return true;
}
