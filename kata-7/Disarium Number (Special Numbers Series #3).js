function disariumNumber(n){
    let str = n.toString();
    let sum = 0;

    for(let i = 0; i < str.length; i++){
        sum += Math.pow(parseInt(str[i]), i + 1);
    }

    return sum === n ? "Disarium !!" : "Not !!";
}
