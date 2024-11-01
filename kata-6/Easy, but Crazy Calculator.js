function crazyCalculator(expression) {
    expression = expression.replace(/\//g, '#')
        .replace(/\*/g, '/')
        .replace(/#/g, '*')
        .replace(/\+/g, '-')
        .replace(/-/g, '+');

    const result = eval(expression);

    return Math.round(result * 100) / 100;
}
