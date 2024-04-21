function differenceOfSquares(n){
    let sum = 0;
    let sumOfSquares = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
        sumOfSquares += i ** 2;
    }

    const squareOfSum = sum ** 2;

    return squareOfSum - sumOfSquares;
}
