function mirrorImage(arr){
    for (let i = 0; i < arr.length - 1; i++){
        const cur = arr[i].toString();
        const next = arr[i + 1].toString();
        if (cur === next || cur === next.split("").reverse().join("")){
            return [arr[i], arr[i + 1]];
        }
    }
    return [-1,-1]
}
