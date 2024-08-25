function findUnique(arr) {
    return arr.reduce((acc, num) => acc ^ num, 0);
}
console.log(findUnique([1, 2, 3, 1, 3]));