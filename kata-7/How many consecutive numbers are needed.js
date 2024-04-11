function consecutive(array) {
    let step = 0;
    array.sort((a,b) => a - b);

    for(let i = array[0]; i <= array[array.length - 1]; i++){
        if(!array.includes(i)){
            step++
        }
    }
    return step;
}
