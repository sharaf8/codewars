function autocomplete(input, dictionary) {
    input = input.replace(/[^a-zA-Z]/g, '');
    const inputLowerCase = input.toLowerCase();

    const matches = dictionary.filter(word => {
        const wordLowerCase = word.toLowerCase();
        return wordLowerCase.startsWith(inputLowerCase);
    });

    return matches.slice(0, 5);
}
