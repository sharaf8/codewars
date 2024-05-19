function waveSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            if (i + 1 < arr.length && arr[i] < arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        } else {
            if (i + 1 < arr.length && arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
}
