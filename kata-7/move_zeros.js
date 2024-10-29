function move_zeros(arrNum, isRight = true) {
    if (isRight === false) {
        return arrNum.filter(num => num === 0).concat(arrNum.filter(num => num !== 0));
    }

    return arrNum.filter(num => num !== 0).concat(arrNum.filter(num => num === 0));
}
