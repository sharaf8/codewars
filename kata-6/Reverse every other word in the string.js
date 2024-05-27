function reverse(str){
    return str.trim().split(' ').map((char, index) => index % 2 === 1 ? char.split('').reverse().join('') : char).join(' ');
}
