function hofstadterQ(n, memo = {}) {
    if (n <= 2) {
        return 1;
    }

    if (memo[n]) {
        return memo[n];
    }

    const result = hofstadterQ(n - hofstadterQ(n - 1, memo), memo) + hofstadterQ(n - hofstadterQ(n - 2, memo), memo);
    memo[n] = result;
    return result;
}
