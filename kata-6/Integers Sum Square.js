const intSumSq = (n,m) => {
    const sq = num => {
        const ints = num.toString().split('').map(Number);
        return ints.reduce((a, b) => a + b, 0) ** 2;
    }

    const result = [];

    for (let i = 1; i < n; i++) {
        if (sq(i) === m) result.push(i);
    }

    return result.length === 0 ? 'No result' : result;;
}