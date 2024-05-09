function trickyDoubles(number) {
    const numberStr = number.toString();
    const middleIndex = Math.floor(numberStr.length / 2);
    const left = numberStr.substring(0, middleIndex);
    const right = numberStr.substring(middleIndex);
    if (left === right) {
        return number;
    }
    return number * 2;
}
