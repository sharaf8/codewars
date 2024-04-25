function numberJoy(n) {
    let sum = 0;
    let nStr = n.toString().split('').map(Number);
    for (const num of nStr){
        sum += num;
    }
    let sumReverse = parseInt(sum.toString().split('').reverse().join(''))

    return n === sum * sumReverse;
}
