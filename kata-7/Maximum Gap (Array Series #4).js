function maxGap (numbers){
    numbers.sort((a,b) => a - b);

    let max = 0;
    for(let i = 0; i < numbers.length - 1; i++){
        let dif = Math.abs(numbers[i] - numbers[i + 1]);
        if(dif > max){
            max = dif
        }
    }
    return max;
}
