function eqSumPowdig(hMax, exp) {
    const result = [];
    for (let num = 2; num <= hMax; num++) {
        const sumOfDigits = num.toString().split('').reduce((acc, digit) => acc + Math.pow(parseInt(digit), exp), 0);
        if (sumOfDigits === num) {
            result.push(num);
        }
    }
    return result;
}
