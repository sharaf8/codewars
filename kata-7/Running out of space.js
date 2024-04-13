function spacey(array) {
    const result = [];
    let cur = '';

    for(const word of array){
        cur += word.replace(/\s/g, '');
        result.push(cur);
    }

    return result;
}
