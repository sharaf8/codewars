const sumNested = arr => {
    let sum = 0;
    for(let num of arr){
        if(Array.isArray(num)){
            sum += sumNested(num);
        }
        else {
            sum += num;
        }
    }
    return sum;
};
