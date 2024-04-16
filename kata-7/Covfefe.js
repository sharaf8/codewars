function covfefe(str) {
    if (str.includes('coverage')) {
        return str.replace(/coverage/g, 'covfefe');
    } else {
        return str + ' covfefe';
    }
}