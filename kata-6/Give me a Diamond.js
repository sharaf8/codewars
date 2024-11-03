function diamond(n) {
    if (n % 2 === 0 || n <= 0) { return null};

    let diamondStr = '';

    for (let i = 1; i <= n; i += 2) {
        const spaces = ' '.repeat((n - i) / 2);
        const stars = '*'.repeat(i);
        diamondStr += spaces + stars + "\n";
    }

    for (let i = n - 2; i > 0; i -= 2) {
        const spaces = ' '.repeat((n - i) / 2);
        const stars = '*'.repeat(i);
        diamondStr += spaces + stars + "\n";
    }

    return diamondStr;
}
