function isLucky(n) {
    const digits = n.toString().split('');
    const sum =  digits.reduce((a, b) => a + parseInt(b), 0);
    return sum === 0 || sum % 9 === 0;
}
