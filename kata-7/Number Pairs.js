function getLargerNumbers(arr1, arr2) {
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        result.push(Math.max(arr1[i], arr2[i]));
    }

    return result;
}
