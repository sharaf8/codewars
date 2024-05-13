function to24hourtime(hour, minute, period) {
    const h = n => n < 12 ? n + 12 : n === 12 ? 12 : n;
    const m = n => n < 10 ? "0" + n : n;
    if (period === "am") {
        return `${hour === 12 ? "00" : hour < 10 ? "0" + hour : hour}${m(minute)}`;
    }
    return `${h(hour)}${m(minute)}`;
}
