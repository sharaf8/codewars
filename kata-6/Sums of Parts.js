function parts_sums(ls) {
    let res = [];
    const sumOfParts = list => list.reduce((a, b) => a + b, 0);

    for (let i = 0; i <= ls.length; i++) {
        res.push(sumOfParts(ls.slice(i)));
    }

    return res;
}

console.log(parts_sums([0, 1, 3, 6, 10]));

//--------------------------------------------------------------------------------
function partsSums(ls) {
    let totalSum = ls.reduce((a, b) => a + b, 0);
    let res = [totalSum];

    for (let i = 0; i < ls.length; i++) {
        totalSum -= ls[i];
        res.push(totalSum);
    }

    return res;
}