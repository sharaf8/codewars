function sortByLanguage(list) {
    return list.sort((a, b) => {
        if (a.language < b.language) return -1;
        if (a.language > b.language) return 1;

        return a.firstName.localeCompare(b.firstName);
    });
}
