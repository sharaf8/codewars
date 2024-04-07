function discoverOriginalPrice(salePrice, salePercentage) {
    const percentage = salePercentage / 100;

    const originalPrice = salePrice / (1 - percentage);

    return Math.round(originalPrice * 100) / 100;
}
