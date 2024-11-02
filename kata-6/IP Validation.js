function check(ip) {
    const octets = ip.split('.');

    for (let octet of octets) {
        if(octets.length !== 4 || !/^\d+$/.test(octet)
            || octet < 0 || octet > 255
            || octet.length > 1 && octet[0] === "0") {
            return false
        }
    }

    return true;
}

console.log(check("1.2.3.4"))