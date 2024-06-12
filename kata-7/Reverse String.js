String.prototype.reverse = function() {
    let res = '';
    for (let i = this.length - 1; i >= 0; i--) {
      res += this[i];
    }
    return res;
  };
  