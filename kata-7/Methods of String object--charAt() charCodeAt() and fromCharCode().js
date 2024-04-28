function topSecret(file) {
    let decrypted = "";
    for (let i = 0; i < file.length; i++) {
        let charCode = file.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            if (charCode >= 65 && charCode <= 90) {
                charCode = ((charCode - 65 - 3 + 26) % 26) + 65;
            }
            else {
                charCode = ((charCode - 97 - 3 + 26) % 26) + 97;
            }
        }
        decrypted += String.fromCharCode(charCode);
    }
    return decrypted;
}