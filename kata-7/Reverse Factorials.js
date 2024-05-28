function reverseFactorial(num) {
    let factorial = 1;
    let i = 1;

    while(factorial < num) {
        i++
        factorial *= i;
    }

    return num === factorial ? i + "!" : "None";
}
