function howManySmaller(arr,n){
    return arr.filter(num => num.toFixed(2) < n).length;
}
