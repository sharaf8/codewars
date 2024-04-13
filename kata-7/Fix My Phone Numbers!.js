function isItANum(str) {
    if (!str.length) return "Not a phone number";

    let num = str.split('').filter(char => !isNaN(char) && char !== ' ').join('');

    return num.length === 11 && num[0] === '0' ? num : "Not a phone number";
}
