function getElement(arr, indices) {
    return indices.reduce((acc, index) => acc[index], arr);
}