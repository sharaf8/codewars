Array.prototype.sum = function() {
    return !this.length ? 0 : this.reduce((a, b) => a + b, 0);
};