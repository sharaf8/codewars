function numObj(arr) {
    return arr.map(num => ({ [String(num)]: String.fromCharCode(num) }));
}
