function compute(n){
    if(n <= 3 || n % 2 === 0){
        return 0;
    }
    let result = 1;
    for(let i = 3; i <= n; i += 2){
        result += 1 / Math.pow(i, 2);
    }
    return result;
}
