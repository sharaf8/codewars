const countPairsInt = (diff, nMax) => {
    const countDivisors = (num) => {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                count += (i * i === num) ? 1 : 2;
            }
        }
        return count;
    };

    let pairCount = 0;

    for (let i = 1; i < nMax - diff; i++) {
        let next = i + diff;
        if (countDivisors(i) === countDivisors(next)) {
            pairCount++;
        }
    }

    return pairCount;
};
