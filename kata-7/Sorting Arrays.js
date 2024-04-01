function sortArray(a1, a2) {
    const result = [];
    for(let i = 0; i < a1.length; i++){
        const letters = a1[i][0];
        result.push(...(a2.filter(word => word[0] === letters)))
    }
    return result;
}