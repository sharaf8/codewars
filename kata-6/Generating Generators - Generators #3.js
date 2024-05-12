function* generator(start, end) {
    for (let i = start; i <= end; i++) {
        yield function* () {
            for (let j = 1; j <= 10; j++) {
                yield `${i} x ${j} = ${i * j}`;
            }
        }();
    }
}
