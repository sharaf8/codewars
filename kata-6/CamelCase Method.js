String.prototype.camelCase = function() {
    if (!this.trim()) return '';
    return this.trim().split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join('');
};
