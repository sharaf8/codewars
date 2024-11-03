const a = {
    num: 2,
    valueOf() {
        return this.num++;
    }
};