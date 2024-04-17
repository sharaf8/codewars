function product (string) {
    let exmark = 0;
    let quesmark = 0;

    for(let i = 0; i < string.length; i++){
        if (string[i] === "!"){
            exmark++
        }
        else if (string[i] === "?"){
            quesmark++
        }
    }
    return exmark * quesmark;
}
