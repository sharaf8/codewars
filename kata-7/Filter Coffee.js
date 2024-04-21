function search(budget, prices) {
    const shops = [];
    for (const shop of prices){
        if(shop <= budget){
            shops.push(shop);
        }
    }

    return shops.sort((a, b) => a - b).join(",");
}
