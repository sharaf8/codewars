function orderFood(list) {
    const mealCounts = {};

    list.forEach(dev => {
        mealCounts[dev.meal] = (mealCounts[dev.meal] || 0) + 1;
    });

    return mealCounts;
}
