function duplicateCount(text){
    text = text.toLowerCase(); // Convert the text to lowercase to make it case-insensitive
    let count = {};

    for (let char of text) {
        count[char] = (count[char] || 0) + 1;
    }

    let duplicateCount = 0;
    for (let char in count) {
        if (count[char] > 1) {
            duplicateCount++;
        }
    }

    return duplicateCount;
}
