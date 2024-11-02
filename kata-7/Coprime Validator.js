function isCoprime(a, b) {
    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }

        return x
    }

    return gcd(a, b) == 1;
}
