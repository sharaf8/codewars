function encode(string) {
    return string
        .replace(/a/gi, 1)
        .replace(/e/gi, 2)
        .replace(/i/gi, 3)
        .replace(/o/gi, 4)
        .replace(/u/gi, 5);
}

function decode(string) {
    return string
        .replace(1, "a")
        .replace(2, "e")
        .replace(3, "i")
        .replace(4, "o")
        .replace(5, "u");
}