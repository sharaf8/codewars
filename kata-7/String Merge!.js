function stringMerge(string1, string2, letter){
    let index1 = string1.indexOf(letter);
    let index2 = string2.indexOf(letter);

    return string1.slice(0, index1) + string2.slice(index2);
}
