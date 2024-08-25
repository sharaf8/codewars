function revrot(str, sz) {
    if (sz <= 0 || str === "" || sz > str.length) {
        return "";
    }

    let result = '';

    for (let i = 0; i < str.length; i += sz) {
        let chunk = str.slice(i, i + sz);

        if (chunk.length < sz) {
            break;
        }

        let sumOfDigits = chunk.split('').reduce((sum, digit) => sum + parseInt(digit), 0);

        if (sumOfDigits % 2 === 0) {
            result += chunk.split('').reverse().join('');
        } else {
            result += chunk.slice(1) + chunk[0];
        }
    }

    return result;
}