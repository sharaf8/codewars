function sumStrings(a, b) {
    function addStrings(str1, str2) {
        let result = '';
        let carry = 0;

        for (let i = str1.length - 1, j = str2.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
            const digit1 = i >= 0 ? parseInt(str1[i]) : 0;
            const digit2 = j >= 0 ? parseInt(str2[j]) : 0;
            const sum = digit1 + digit2 + carry;
            result = (sum % 10) + result;
            carry = Math.floor(sum / 10);
        }

        return result;
    }

    a = a.replace(/^0+/, '');
    b = b.replace(/^0+/, '');

    return addStrings(a, b);
}