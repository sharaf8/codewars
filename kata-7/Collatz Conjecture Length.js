function collatz(n, length = 1) {
    if (n === 1) {
        return length;
    }

    if (n % 2 === 0) { // If n is even
        return collatz(n / 2, length + 1);
    } else { // If n is odd
        return collatz(3 * n + 1, length + 1);
    }
}
