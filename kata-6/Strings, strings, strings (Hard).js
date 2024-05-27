function arrayToString(arr) {
    if (!Array.isArray(arr)) {
        if (typeof arr === 'string') {
            return "'" + arr + "'";
        } else {
            return arr.toString();
        }
    } else {
        return '[' + arr.map(element => arrayToString(element)).join(',') + ']';
    }
}

Array.prototype.toString = function() {
    return arrayToString(this);
};
