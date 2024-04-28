function alienLanguage(str){
    return str.split(' ').map(char => char.slice(0, -1).toUpperCase() + char.slice(-1).toLowerCase())
        .join(' ');
}
