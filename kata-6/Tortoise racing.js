function race(v1, v2, g) {
    if (v1 >= v2) return null;

    const timeInHours = g / (v2 - v1);

    const totalSeconds = Math.floor(timeInHours * 3600);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [hours, minutes, seconds];
}
