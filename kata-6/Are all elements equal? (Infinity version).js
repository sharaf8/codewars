function eqAll(iterable) {
    const iterator = iterable[Symbol.iterator]();
    const firstValue = iterator.next();

    if (firstValue.done) return true;

    while (true) {
        const currentValue = iterator.next();
        if (currentValue.done) break;

        if (currentValue.value !== firstValue.value) {
            return false;
        }
    }

    return true;
}