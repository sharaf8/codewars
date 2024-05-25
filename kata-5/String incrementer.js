function incrementString(str) {
    return str.replace(/(\d*)$/, (match) => {
        const num = match ? String(Number(match) + 1).padStart(match.length, '0') : '1';
        return num;
    });
}
