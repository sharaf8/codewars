function giveMeFive(obj){
    const result = [];

    for(let key in obj) {
        if (key.length === 5) {
            result.push(key);
        }
        if (obj[key].toString().length === 5) {
            result.push(obj[key]);
        }
    }

    return result;
}
