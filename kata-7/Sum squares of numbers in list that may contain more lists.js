function SumSquares(l){
    let result = 0;
    for(let num of l){
        if (Array.isArray(num)){
            result += SumSquares(num);
        }
        else {
            result += Math.pow(num, 2);
        }
    }
    return result;
}