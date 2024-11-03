function aa(...b) {
    let count = 0;
    for (let bool of b) {
        if (bool === true) count++;
    }

    return count === 1;
}
