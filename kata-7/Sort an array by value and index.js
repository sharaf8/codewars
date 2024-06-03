function sortByValueAndIndex(array) {
    return array
        .map((num, index) => ({ value: num, product: num * (index + 1) }))
        .sort((a, b) => a.product - b.product)
        .map(item => item.value);
}
