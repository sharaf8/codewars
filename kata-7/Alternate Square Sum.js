function alternateSqSum(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenSum += Math.pow(arr[i], 2);
        } else {
            oddSum += arr[i];
        }
    }

    return evenSum + oddSum;
}
