function powerOf4(num) {
    if (typeof num !== 'number' || num <= 0 || num % 1 !== 0) {
        return false;
    }

    while (num !== 1) {
        if (num % 4 !== 0) {
            return false;
        }
        num /= 4;
    }

    return true;
}
