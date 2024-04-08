function paintLetterboxes(start, end) {
    const frequency = Array(10).fill(0);

    for (let i = start; i <= end; i++) {
        String(i).split('').forEach(digit => frequency[digit]++);
    }

    return frequency;
}