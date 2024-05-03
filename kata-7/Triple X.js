function tripleX(str) {
    const index = str.indexOf('x');
    return index !== -1 && str[index + 1] === 'x' && str[index + 2] === 'x';
}
