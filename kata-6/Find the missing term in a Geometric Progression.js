function findMissing(arr) {
    const n = arr.length;

    const r = Math.pow(arr[n - 1] / arr[0], 1 / (n));

    for (let i = 0; i < n - 1; i++) {
        if (Math.abs(arr[i] * r - arr[i + 1]) > 1e-9) {
            return arr[i] * r;
        }
    }

    return null;
}
