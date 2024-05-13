function humanReadable (seconds) {
    const padZero = n => n < 10 ? "0" + n : n;
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);
    return `${padZero(h)}:${padZero(m)}:${padZero(s)}`
}
