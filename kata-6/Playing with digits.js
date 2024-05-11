function digPow(n, p){
    const digits = Array.from(String(n), Number);
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(digits[i], p + i);
    }

    if (sum % n === 0) {
        return sum / n;
    }

    return -1;
}
