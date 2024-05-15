function inArray(array1,array2){
    const result = [];

    for (const s1 of array1) {
        for (const s2 of array2) {
            if (s2.includes(s1) && !result.includes(s1)) {
                result.push(s1)
                break;
            }
        }
    }
    return result.sort();
}
