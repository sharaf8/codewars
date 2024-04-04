function mostFrequentItemCount(collection) {
    if (collection.length === 0) return 0;

    const frequency = {};
    let maxFrequency = 0;

    for (let item of collection) {
        frequency[item] = (frequency[item] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, frequency[item]);
    }

    return maxFrequency;
}
