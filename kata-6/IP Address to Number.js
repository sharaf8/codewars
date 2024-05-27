function ipToNum(ip) {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>> 0;
}

function numToIp(num) {
    return [
        (num >>> 24) & 255,
        (num >>> 16) & 255,
        (num >>> 8) & 255,
        num & 255
    ].join('.');
}
