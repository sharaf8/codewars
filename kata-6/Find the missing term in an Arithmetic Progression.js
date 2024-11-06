function findMissing(arr) {
    const n = arr.length;
    const d = (arr[n - 1] - arr[0]) / n;

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] + d !== arr[i + 1]) {
            return arr[i] + d;
        }
    }

    return null;
}
