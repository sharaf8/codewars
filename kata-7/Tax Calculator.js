function tax(pr) {
    if (typeof pr !== "number" || pr <= 0) {
        return 0;
    }

    if (pr <= 10) {
        return +(pr * 0.1).toFixed(2);
    } else if (pr <= 20) {
        return +(10 * 0.1 + (pr - 10) * 0.07).toFixed(2);
    } else if (pr <= 30) {
        return +(1.7 + (pr - 20) * 0.05).toFixed(2);
    } else {
        return +(1.7 + 0.5 + (pr - 30) * 0.03).toFixed(2);
    }
}

console.log(tax(35));