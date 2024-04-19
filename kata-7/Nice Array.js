function isNice(arr) {
    if (arr.length === 0) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        if (arr.includes(n - 1) || arr.includes(n + 1)) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}