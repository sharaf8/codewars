function giveChange(amount) {
    let breakdown = [0, 0, 0, 0, 0, 0];

    breakdown[5] = Math.floor(amount / 100);
    amount %= 100;
    breakdown[4] = Math.floor(amount / 50);
    amount %= 50;
    breakdown[3] = Math.floor(amount / 20);
    amount %= 20;
    breakdown[2] = Math.floor(amount / 10);
    amount %= 10;
    breakdown[1] = Math.floor(amount / 5);
    amount %= 5;
    breakdown[0] = amount;

    return breakdown;
}
