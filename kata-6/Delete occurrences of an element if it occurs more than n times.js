function deleteNth(motifs, N) {
    const count = {};
    const result = [];

    for (const motif of motifs) {
        if (!(motif in count)) {
            count[motif] = 0;
        }

        if (count[motif] < N) {
            result.push(motif);
            count[motif]++;
        }
    }

    return result;
}