function allContinents(list) {
    const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    return continents.every(continent => list.some(dev => dev.continent === continent));
}
