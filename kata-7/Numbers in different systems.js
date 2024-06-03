const sysNums = (n, sys) => {
    const syst = n.toString(sys);
    return /^[0-9]+$/.test(syst) ? +syst : syst;
};
    