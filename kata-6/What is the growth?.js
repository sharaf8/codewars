function getGrowth(...n) {
    let res = `${n[0]} (+0, +0%)`;
    for (let i = 1; i < n.length; i++) {
        let diff = n[i] - n[i - 1];
        let percent = Math.round(((n[i] - n[i - 1]) / n[i - 1]) * 100);
        res += `, ${n[i]} (${diff >= 0 ? "+" + diff : diff}, ${percent === 0 ? "+0%" : (percent >= 0 ? "+" + percent : percent) + "%" })`; // Format 0% as +0%
    }
    return res;
}