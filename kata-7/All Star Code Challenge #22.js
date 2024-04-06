function toTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let min = Math.floor((seconds % 3600) / 60);
    return `${hours} hour(s) and ${min} minute(s)`;
}
