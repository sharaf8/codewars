function queueTime(customers, n) {
    let tills = new Array(n).fill(0);

    for (const time of customers) {
        let nextTill = tills.indexOf(Math.min(...tills));
        tills[nextTill] += time;
    }

    return Math.max(...tills);
}
