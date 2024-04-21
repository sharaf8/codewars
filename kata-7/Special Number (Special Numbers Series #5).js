function specialNumber(n) {
    const digits = n.toString();

    for (const digit of digits) {
        const num = Number(digit);

        if (num < 0 || num > 5) {
            return "NOT!!";
        }
    }

    return "Special!!";
}
