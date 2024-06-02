function alternateSqSum(arr){
    return arr.reduce(function(prev, cur, index) {
        return prev + ( index % 2 ? Math.pow(cur, 2) : cur );
    }, 0);
}
