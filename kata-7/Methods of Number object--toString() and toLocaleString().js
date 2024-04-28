function colorOf(r, g, b){
    const toHex = x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    return "#" + toHex(r) + toHex(g) + toHex(b);
}
