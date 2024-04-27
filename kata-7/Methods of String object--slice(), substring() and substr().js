function cutIt(arr){
    const min = Math.min(...arr.map(char => char.length));
    return arr.map(char => char.slice(0, min));
}