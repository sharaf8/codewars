function countLanguages(list) {
    return list.reduce((count, developer) => {
        count[developer.language] = (count[developer.language] || 0) + 1;
        return count;
    }, {});
}
