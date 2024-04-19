function checkThreeAndTwo(array) {
    const counts = {};
    for(let i = 0; i < array.length; i++){
        counts[array[i]] = (counts[array[i]] || 0) + 1;
    }

    let three = false;
    let two = false;

    for (const key in counts){
        if(counts[key] === 3){
            three = true;
        }
        else if (counts[key] === 2){
            two = true;
        }
    }
    return  three && two;
}
