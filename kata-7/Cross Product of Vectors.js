function crossProduct(vector1, vector2) {
    if (!Array.isArray(vector1) || vector1.length !== 3 || !Array.isArray(vector2) || vector2.length !== 3) {
        throw "Arguments are not 3D vectors!";
    }

    const x = vector1[1] * vector2[2] - vector1[2] * vector2[1];
    const y = vector1[2] * vector2[0] - vector1[0] * vector2[2];
    const z = vector1[0] * vector2[1] - vector1[1] * vector2[0];

    return [x, y, z];
}
