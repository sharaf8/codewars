function absentVowel(x){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < x.length; i++){
        if(!x.includes(vowels[i])){
            return i;
        }
    }
}

console.log(absentVowel("sdfglkaahgqertigu"))