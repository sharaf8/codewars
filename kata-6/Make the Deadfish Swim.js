function Program(programm) {
    let value = 0;
    const output = [];

    for (let command of programm) {
        switch (command) {
            case "i":
                value += 1;
                break;
            case "d":
                value -= 1;
                break;
            case "s":
                value *= value;
                break;
            case "o":
                output.push(value);
                break;
        }
    }

    return output;
}

console.log(Program("iiisdoso"))