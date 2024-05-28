function changer(str) {
    let vowels = 'aeiouAEIOU';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char >= 'a' && char <= 'z') {
            char = String.fromCharCode((char.charCodeAt(0) - 97 + 1) % 26 + 97);
        } else if (char >= 'A' && char <= 'Z') {
            char = String.fromCharCode((char.charCodeAt(0) - 65 + 1) % 26 + 65);
        }

        if (vowels.includes(char.toLowerCase())) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
    }

    return result;
}
