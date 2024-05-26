function smallestDiff(arr1, arr2) {
    if (arr1.length === 0 && arr2.length === 0) return -1;
    if (arr1.length === 0) return Math.min(...arr2);
    if (arr2.length === 0) return Math.min(...arr1);

    let result = Infinity;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            const diff = Math.abs(arr1[i] - arr2[j]);
            result = Math.min(result, diff);
        }
    }
    return result;
}
