function scale(strng, k, v) {
    if (strng === "") return "";

    const scaledHorizontally = strng.split("\n").map(line => line.split("").map(char => char.repeat(k)).join("")).join("\n");
    const scaledVertically = scaledHorizontally.split("\n").map(line => Array(v).fill(line).join("\n")).join("\n");

    return scaledVertically;
}
