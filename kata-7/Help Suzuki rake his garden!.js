function rakeGarden(garden) {
    const words = garden.split(' ');

    for(let i = 0; i < words.length; i++){
        if (words[i] !== "gravel" && words[i] !== "rock"){
            words[i] = "gravel";
        }
    }

    return words.join(" ");
}
