function solve(arr) {
    arr.sort((a, b) => a - b);

    let minIndex = 0;
    let maxIndex = arr.length - 1;

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(arr[maxIndex]);
            maxIndex--;
        }
        else {
            result.push(arr[minIndex]);
            minIndex++;
        }
    }

    return result;
}
