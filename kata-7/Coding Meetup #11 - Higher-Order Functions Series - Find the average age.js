function getAverageAge(list) {
    if(list.length < 1) return 0;

    let totalAge = list.reduce((acc, developer) => acc + developer.age, 0);
    return Math.round(totalAge / list.length);
}