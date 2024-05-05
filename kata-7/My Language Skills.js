function myLanguages(results) {
    return Object.keys(results)
        .filter(char => results[char] >= 60)
        .sort((a,b) => results[b] - results[a]);
}
