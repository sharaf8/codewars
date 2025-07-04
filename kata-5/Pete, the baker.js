function cakes(obj, rep) {
    const objKey = Object.keys(obj);

    for (let i = 0; i < objKey.length; i++) {
        if (!Object.keys(rep).includes(objKey[i])) {
            return 0;
        }
    }

    let result = [];

    for (let i = 0; i < objKey.length; i++) {
        result.push(Math.floor(rep[objKey[i]] / obj[objKey[i]]));
    }

    return Math.min(...result);
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 500, sugar: 1200, eggs: 5, milk: 200}));

console.log(cakes({apples: 3, flour: 300}, {flour: 1000}));