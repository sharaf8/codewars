function pattern(n){
    let result = "1";
    for(let i = 2; i <= n; i++){
        result += "\n1" + '*'.repeat(i - 1) + i;
    }
    return result;
}
