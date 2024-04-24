function nextPal(val) {
    let num = val + 1;

    while (true) {
        if (isPalindrome(num.toString())) {
            return num;
        }
        num++;
    }
}

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}