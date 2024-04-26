function eliminateUnsetBits(number) {
    let nStr = "";
    for(let i = 0; i < number.length; i++){
        if(number[i] === '1'){
            nStr += number[i];
        }
    }
    if (nStr === "") return 0;
    return parseInt(nStr, 2);
}