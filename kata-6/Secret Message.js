function findSecretMessage(paragraph) {
    const lowStr = paragraph.toLowerCase();
    const clean = lowStr.replace(/[^\w\s]/g, '');

    const split = clean.split(/\s+/);

    const seen = new Set();
    const dubl = new Set();
    const result = [];

    for (const word of split) {
        if (seen.has(word)) {
            if (!dubl.has(word)) {
                dubl.add(word);
                result.push(word);
            }
        }
        else {
            seen.add(word);
        }
    }

    return result.join(' ');
}
