function createDict(keys, values) {
    const result = {};
    for (let i = 0; i < keys.length; i++) {
        if (i < values.length) {
            result[keys[i]] = values[i];
        } else {
            result[keys[i]] = null;
        }
    }
    return result;
}
