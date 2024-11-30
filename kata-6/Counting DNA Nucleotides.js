function getCountedNucleotides(str){
    const counts = {
        A: 0,
        C: 0,
        G: 0,
        T: 0
    }

    for (const chars of str) {
        const char = chars.toUpperCase()
        if(counts[char] !== undefined) {
            counts[char]++;
        }
    }
    return counts;
}

console.log(getCountedNucleotides("ACG"))