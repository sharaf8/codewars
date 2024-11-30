function sumConsecutives(arr) {
    const res = [];
    let sum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            sum += arr[i];
        }
        else {
            res.push(sum);
            sum = arr[i];
        }
    }

    res.push(sum);
    return res;
}
