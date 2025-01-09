function dot(str) {
    const [left, operator, right] = str.split(" ");

    const leftLength = left.length;
    const rightLength = right.length;

    let result;

    switch (operator) {
        case "+":
            result = leftLength + rightLength;
            break;
        case "-":
            result = leftLength - rightLength;
            break;
        case "*":
            result = leftLength * rightLength;
            break;
        case "//":
            result = Math.floor(leftLength / rightLength);
            break;
        default:
            throw new Error("Invalid operator!!");
        }
    return ".".repeat(result);
}

console.log(dot("..... // .."));