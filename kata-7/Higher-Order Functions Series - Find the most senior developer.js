function findSenior(list) {
    const max = Math.max(...list.map(dev => dev.age));
    return list.filter(dev => dev.age === max);
}
