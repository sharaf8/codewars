function initializeNames(name){
    const names = name.split(' ');

    if (names.length === 1) {
        return name;
    }

    for (let i = 1; i < names.length - 1; i++) {
        names[i] = names[i][0] + '.';
    }

    return names.join(' ');
}
