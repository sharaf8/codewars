function validPass(pass) {
    if (pass.length <= 3 || pass.length >= 20) {
        return "INVALID";
    }

    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i < pass.length; i++) {
        const char = pass[i];

        if (/[a-zA-Z]/.test(char)) {
            hasLetter = true;
        }
        else if (/[0-9]/.test(char)) {
            hasNumber = true;
        }
        else {
            return "INVALID";
        }
    }

    if (hasLetter && hasNumber) {
        return "VALID";
    } else {
        return "INVALID";
    }
}