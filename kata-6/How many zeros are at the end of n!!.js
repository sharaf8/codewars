function countZeros(num){
    let mult = 1;

    if(num % 2 === 0) {
        for (let i = 2; i <= num; i ++){
            mult *= i;
        }
    }
    else {
        for (let i = 1; i <= num; i ++){
            mult *= i;
        }
    }
    let countZero = 0;
    while (mult % 10 === 0) {
        countZero++;
        mult /= 10;
    }


    return countZero;
}

