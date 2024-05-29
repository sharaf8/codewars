function looseChange(cents){
    if (cents <= 0) {
        return {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0};
    }

    cents = Math.floor(cents);

    let q = Math.floor(cents / 25);
    cents %= 25;
    let d = Math.floor(cents / 10);
    cents %= 10;
    let n = Math.floor(cents / 5);
    cents %= 5;
    let p = Math.floor(cents / 1);

    let result = {};
    result["Nickels"] = n;
    result["Pennies"] = p;
    result["Dimes"] = d;
    result["Quarters"] = q;

    return result;
}
