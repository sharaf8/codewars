const detectInt = (...funcs) => {
    if (funcs.length === 0) return 1;

    let number = 1;
    let found = false;

    while (!found) {
        if (funcs.every(func => func(number))) {
            found = true;
        } else {
            number++;
        }
    }

    return number;
};
