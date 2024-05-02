function countAnimals(animals,count){
    return count.map(char => {
        const reg = new RegExp(char, "ig");
        const matches = animals.match(reg);
        return matches ? matches.length : 0;
    });
}
