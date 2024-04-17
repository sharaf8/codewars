function pendulum(values) {
    values.sort((a, b) => a - b);

    const result = [];

    const centerIndex = Math.floor((values.length - 1) / 2);
    result[centerIndex] = values[0];

    let leftIndex = centerIndex - 1;
    let rightIndex = centerIndex + 1;

    for (let i = 1; i < values.length; i++) {
        if (i % 2 === 1) {
            result[rightIndex] = values[i];
            rightIndex++;
        } else {
            result[leftIndex] = values[i];
            leftIndex--;
        }
    }

    return result;
}