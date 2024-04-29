function countGrade(scores){
    const s = scores.filter(num => num === 100).length;
    const a = scores.filter(num => num < 100 && num >= 90).length;
    const b = scores.filter(num => num < 90 && num >= 80).length;
    const c = scores.filter(num => num < 80 && num >= 60).length;
    const d = scores.filter(num => num < 60 && num >= 0).length;
    const x = scores.filter(num => num === -1).length;
    return {S: s, A: a, B: b, C: c, D: d, X: x};
}
