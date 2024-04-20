function spongeMeme(sentence) {
    const sent = sentence.split('')
    return sent.map((char, index) => index % 2 !== 0 ? char.toLowerCase() : char.toUpperCase())
        .join('');
}