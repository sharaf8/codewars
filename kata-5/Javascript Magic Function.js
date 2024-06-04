function MagicFunction(...args) {
    const sumArgs = (args) => args.reduce((sum, arg) => sum + (isNaN(Number(arg)) ? 0 : Number(arg)), 0);

    let accumulatedSum = sumArgs(args);

    const innerFunction = (...newArgs) => {
        accumulatedSum += sumArgs(newArgs);
        return innerFunction;
    };

    innerFunction.valueOf = () => accumulatedSum;

    return innerFunction;
}
