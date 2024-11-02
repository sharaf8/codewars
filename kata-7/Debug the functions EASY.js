function multi(arr) {
    return arr.reduce((res, num) => res * num, 1);
}

function add(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function reverse(str) {
    return [...str].reverse().join('');
}