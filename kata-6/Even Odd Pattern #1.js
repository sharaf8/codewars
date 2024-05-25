const EvenOdd = (arr) => {
    let sum = arr[0] || 0;

    for (let i = 1; i < arr.length; i += 2) {
        const currentNum = arr[i];
        const nextNum = arr[i + 1] || 0;

        sum = sum * currentNum + nextNum;
    }

    return sum;
};