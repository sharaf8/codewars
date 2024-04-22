function sentencify(words) {
    let join = words.join(' ');
    return join[0].toUpperCase() + join.slice(1) + ".";
}
