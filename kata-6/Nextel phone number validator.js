function isValidNextelPhoneNumber(id) {
    const regex = /^\s*\d+\s*\*\s*\d{1,6}\s*\*\s*\d{1,6}\s*$/;
    return regex.test(id);
}
