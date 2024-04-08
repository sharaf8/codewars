function findScreenHeight(width, ratio) {
    const [widthRatio, heightRatio] = ratio.split(':').map(Number);
    const height = Math.floor((width * heightRatio) / widthRatio);
    return `${width}x${height}`;
}
