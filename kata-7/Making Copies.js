function copyList(l){
    if (!Array.isArray(l)) throw new Error("Input is not an array.");

    return l.slice();
}
