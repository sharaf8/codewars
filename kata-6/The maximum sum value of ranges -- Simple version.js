function maxSum(arr, range){
    let max = -Infinity;

    for (let [start, end] of range) {
        const sum = arr.slice(start, end + 1).reduce((acc, curr) => acc + curr, 0);

        if (sum > max) {
            max = sum;
        }
    }

    return max;
}
