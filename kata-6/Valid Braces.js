function validBraces(braces) {
    let stack = [];

    const matchingBraces = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of braces) {
        if (['(', '[', '{'].includes(char)) {
            stack.push(char);
        }
        else if ([')', ']', '}'].includes(char)) {
            if (stack.length === 0 || stack.pop() !== matchingBraces[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
