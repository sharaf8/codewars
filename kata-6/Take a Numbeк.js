function dig(is) {
    let sum = 0;
    const sp = is.toString().split('');

    for (let i = 0; i < sp.length; i++){
        sum += Math.pow(parseInt(sp[i]), i + 1);
    }
    return sum;
}


function sumDigPow(a, b) {
    const result = [];
    for (let i = a; i <= b; i++) {
        if(dig(i) === i) {
            result.push(i);
        }
    }
    return result;
}
