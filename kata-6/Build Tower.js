function towerBuilder(nFloors) {
    const result = [];

    for (let i = 0; i < nFloors; i++) {
        const spaces = " ".repeat(nFloors - i - 1);
        const stars = "*".repeat(2 * i + 1);
        result.push(spaces + stars + spaces);
    }

    return result;
}
