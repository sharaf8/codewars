function swapAdjacentBits(n) {
    let binary = n.toString(2).padStart(32, '0');

    let swapped = '';
    for (let i = 0; i < binary.length; i += 2) {
        swapped += binary[i + 1] + binary[i];
    }

    return parseInt(swapped, 2);
}
