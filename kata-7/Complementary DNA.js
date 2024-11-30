function dnaStrand(str) {
    const comp = {
        A: "T",
        T: "A",
        G: "C",
        C: "G"
    }

    return str.
        split("").
        map(char => comp[char]).
        join("");
}
