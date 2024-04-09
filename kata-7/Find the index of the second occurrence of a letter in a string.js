function secondSymbol(s, symbol) {
    return s.split('').filter(a => a === symbol).length > 1 ? s.indexOf(symbol, s.indexOf(symbol) + 1) : -1;
}
