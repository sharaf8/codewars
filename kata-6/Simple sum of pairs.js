function solve(n) {
    const DigitSum = n => n.toString().split("").reduce((a, b) => a + parseInt(b), 0);
    let maxDigitSum = 0;

    for (let a = 0; a <= n; a++) {
        let b = n - a;
        let sum = DigitSum(a) + DigitSum(b);

        maxDigitSum = Math.max(maxDigitSum, sum);
    }

    return maxDigitSum;
}

console.log(solve(29));