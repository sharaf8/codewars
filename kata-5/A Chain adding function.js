function add(n){
    const inner = m => add(n + m);
    inner.valueOf = () => n;
    return inner;
}
