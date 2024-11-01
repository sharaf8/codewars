function min(arr, n){
    const result = [];
    for (let i = 0; i <= arr.length - n; i++){
        const minVal = Math.min(...arr.slice(i, i + n));
        result.push(minVal);
    }

    return result;
}
