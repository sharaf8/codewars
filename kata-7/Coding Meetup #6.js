function isSameLanguage(list) {
    if (list.length === 0) return false;
    const leng = list[0].language;
    return list.every(dev => dev.language === leng);
}