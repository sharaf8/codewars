function sortTheInnerContent(words) {
    return words.split(" ")
        .map(word => {
            if (word.length <= 2) return word;

            const first = word[0];
            const last = word[word.length - 1];
            const middle = word
                .slice(1, -1)
                .split("")
                .sort((a, b) => b.localeCompare(a))
                .join("");
            return first + middle + last;
        })
        .join(" ");
}