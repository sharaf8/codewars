function rootSum(n) {
    let sum = 0;
    console.log(n)
    for (let i = 1; i <= Math.round(Math.sqrt(n)); i++) {
        let root = Math.round(Math.pow(n, 1 / i))
        if (Math.pow(root, i) === n) {
            sum += root
        }
    }
    return sum;
}