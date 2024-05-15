function number2words(number) {
    if (number === 0) return "zero";

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function convertHundreds(num) {
        if (num >= 100) {
            return ones[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' ' + convertTens(num % 100) : '');
        } else {
            return convertTens(num);
        }
    }

    function convertTens(num) {
        if (num < 10) return ones[num];
        else if (num >= 11 && num <= 19) return teens[num - 10];
        else {
            return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? '-' + ones[num % 10] : '');
        }
    }

    if (number >= 1000 && number < 1000000) {
        return convertHundreds(Math.floor(number / 1000)) + ' thousand' + (number % 1000 !== 0 ? ' ' + convertHundreds(number % 1000) : '');
    } else {
        return convertHundreds(number);
    }
}
