function sumPairs(numbers, targetSum) {
    const seen = new Set();

    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];
        const complement = targetSum - current;

        if (seen.has(complement)) {
            return [complement, current];
        }

        seen.add(current);
    }

    return undefined;
}
