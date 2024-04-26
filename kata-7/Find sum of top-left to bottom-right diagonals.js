function diagonalSum(matrix) {
    let diagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        diagonalSum += matrix[i][i];
    }

    return diagonalSum;
}
