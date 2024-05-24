String.prototype.formatWith = function (...args) {
    return this.replace(/{(\d+)}/g, (match, index) => {
        return typeof args[index] !== 'undefined' ? args[index] : match;
    });
};
