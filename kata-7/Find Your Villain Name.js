function getVillainName(birthday) {
    const m = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"];
    const d = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];

    const month = birthday.getMonth();
    const lastDate = birthday.getDate() % 10;

    return `${m[month]} ${d[lastDate]}`;
}
