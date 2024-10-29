function timeConvert(min) {
    if (min < 1) return "00:00";

    const hh = Math.floor(min / 60);
    const mm = min % 60;

    const formattedHH = hh < 10 ? "0" + hh : hh.toString();
    const formattedMM = mm < 10 ? "0" + mm : mm.toString();

    return `${formattedHH}:${formattedMM}`;
}