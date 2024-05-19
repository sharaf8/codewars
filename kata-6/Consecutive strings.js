function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return "";
    }

    let longest = "";

    for (let i = 0; i <= strarr.length - k; i++) {
        let currentStr = "";
        for (let j = 0; j < k; j++) {
            currentStr += strarr[i + j];
        }
        if (currentStr.length > longest.length) {
            longest = currentStr;
        }
    }

    return longest;
}