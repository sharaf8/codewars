function find(arr) {
    const n = arr.length;

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < n; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    const totalTerms = n + 1;
    const expectedSum = (min + max) * totalTerms / 2;

    let actualSum = 0;
    for (let i = 0; i < n; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}
