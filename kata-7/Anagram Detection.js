function Anagram(a, b) {
    return a.toLowerCase().split("").sort().join("") === b.toLowerCase().split("").sort().join("");
}
