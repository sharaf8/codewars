function generateHashtag(str) {
    if (str.trim() === "") return false;
    let hash = "#" + str.trim().split(" ").map(word => {
        if (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return "";
    }).join("");
    return hash.length > 140 ? false : hash;
}
