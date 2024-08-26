function explode(x) {
    const [first, second] = x;

    if (typeof first !== 'number' && typeof second !== 'number') {
        return 'Void!';
    }

    const score = (typeof first === 'number' ? first : 0) + (typeof second === 'number' ? second : 0);

    const result = Array(score).fill(x);

    return result;
}
