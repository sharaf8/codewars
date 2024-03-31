function removeRotten(bagOfFruits){
    if(!bagOfFruits || bagOfFruits.length === 0) return [];

    const fruits = [];
    for(let b of bagOfFruits){
        if(b.includes("rotten")){
            fruits.push(b.replace("rotten", "").toLowerCase());
        }
        else{
            fruits.push(b.toLowerCase());
        }
    }
    return fruits;
}