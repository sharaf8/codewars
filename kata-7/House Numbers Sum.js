function houseNumbersSum(inputArray) {
    let index = inputArray.indexOf(0);
    let sum = 0;
    for (let i = 0; i < index; i++) {
        sum += inputArray[i];
    }
    return sum;
}
