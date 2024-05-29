const makeChange = (amount) => {
    let h = Math.floor(amount / 50);
    let q = Math.floor((amount % 50) / 25);
    let d = Math.floor(((amount % 50) % 25) / 10);
    let n = Math.floor((((amount % 50) % 25) % 10) / 5);
    let p = Math.floor(((((amount % 50) % 25) % 10) % 5) / 1);

    let result = {};

    if (h > 0) result["H"] = h;
    if (q > 0) result["Q"] = q;
    if (d > 0) result["D"] = d;
    if (n > 0) result["N"] = n;
    if (p > 0) result["P"] = p;

    return result;
};
