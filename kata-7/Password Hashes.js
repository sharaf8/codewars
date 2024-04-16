const crypto = require('crypto');

function passHash(password) {
    const hash = crypto.createHash('md5').update(password).digest('hex');
    return hash;
}
