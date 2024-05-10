function spinWords(string){
    return string
        .split(' ').map(char => char.length >= 5 ? char.split('').reverse().join('') : char)
        .join(' ');
}
