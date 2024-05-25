function addLength(str) {
    return str.split(' ').map(char => `${char} ${char.length}`);
}
