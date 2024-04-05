function chain(startingValue, functions) {
    let result = startingValue;
    for (let func of functions) {
        result = func(result);
    }
    return result;
}
