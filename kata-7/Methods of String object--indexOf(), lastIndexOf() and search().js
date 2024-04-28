function firstToLast(str, c) {
    let firstIndex = str.indexOf(c);
    if (firstIndex === -1) {
        return -1;
    }

    let lastIndex = str.lastIndexOf(c);
    return lastIndex - firstIndex;
}
