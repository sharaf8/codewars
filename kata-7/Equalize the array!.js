function equalize(array){
    const firstEl = array[0];
    return array.map(num => {
        const minus = num - firstEl;
        return (minus >= 0 ? "+" : "-") + Math.abs(minus);
    });
}
