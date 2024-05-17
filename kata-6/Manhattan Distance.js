function manhattanDistance(pointA, pointB){
    const a = Math.abs(pointA[0] - pointB[0]);
    const b = Math.abs(pointA[1] - pointB[1]);

    return a + b;
}
