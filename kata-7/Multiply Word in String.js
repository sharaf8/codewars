function modifyMultiply(str, index, multiplier){
    const word = str.split(" ")[index];
    return Array(multiplier).fill(word).join("-");
}
