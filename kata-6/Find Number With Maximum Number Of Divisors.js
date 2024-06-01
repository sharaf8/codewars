const divNum = (a, b) => {
    if (a > b) return "Error";

    let maxDivisors = 0;
    let result = a;

    const countDivisors = (num) => {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                count += (i * i === num) ? 1 : 2;
            }
        }
        return count;
    };

    for (let i = a; i <= b; i++) {
        const divisors = countDivisors(i);
        if (divisors > maxDivisors) {
            maxDivisors = divisors;
            result = i;
        } else if (divisors === maxDivisors && i < result) {
            result = i;
        }
    }

    return result;
};
