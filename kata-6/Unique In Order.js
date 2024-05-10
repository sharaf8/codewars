function uniqueInOrder(sequence) {
    if (typeof sequence === 'string') {
        sequence = sequence.split('');
    }

    let result = [];

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] !== sequence[i + 1] || i === sequence.length - 1) {
            result.push(sequence[i]);
        }
    }

    return result;
}