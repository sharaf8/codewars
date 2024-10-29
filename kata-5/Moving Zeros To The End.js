function moveZeros(number) {
    const nonZeros = number.filter(n => n !== 0);
    const countOfZeros = number.length - nonZeros.length;
    const zeros = Array(countOfZeros).fill(0);

    return [...nonZeros, ...zeros];
}

