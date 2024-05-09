function doubleCheck(str){
    const str1 = str.trim().toLowerCase();
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str1[i + 1]) return true;
    }
    return false;
}
