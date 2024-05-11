function searchArray(arrayToSearch, query) {
    if (!Array.isArray(arrayToSearch) || arrayToSearch.some(subArr => !Array.isArray(subArr) || subArr.length !== 2)) {
        throw new Error('Invalid arrayToSearch input');
    }
    if (!Array.isArray(query) || query.length !== 2) {
        throw new Error('Invalid query input');
    }

    for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1]) {
            return i;
        }
    }
    return -1;
}
