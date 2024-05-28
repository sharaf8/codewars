function reverseFizzBuzz(sequence) {
    const elements = sequence.split(' ');

    const matchFizzBuzz = (num, element) => {
        if (element === 'FizzBuzz') return num % 3 === 0 && num % 5 === 0;
        if (element === 'Fizz') return num % 3 === 0;
        if (element === 'Buzz') return num % 5 === 0;
        return num == element;
    };

    for (let start = 1; ; start++) {
        let match = true;
        for (let i = 0; i < elements.length; i++) {
            if (!matchFizzBuzz(start + i, elements[i])) {
                match = false;
                break;
            }
        }
        if (match) {
            return Array.from({ length: elements.length }, (_, i) => start + i);
        }
    }
}
