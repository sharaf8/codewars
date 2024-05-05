function findOddNames(list) {
    return list.filter(dev => {
        const asciiSum = dev.firstName.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
        return asciiSum % 2 !== 0;
    });
}
