function persistence(num) {
    let count = 0;

    while (num >= 10) {
        num = multiplyDigits(num);
        count++;
    }

    return count;
}

function multiplyDigits(number) {
    let product = 1;

    while (number > 0) {
        product *= number % 10;
        number = Math.floor(number / 10);
    }

    return product;
}
