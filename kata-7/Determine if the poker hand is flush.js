function isFlush(cards) {
    const suits = cards.map(card => card.slice(-1));
    const firstSuit = suits[0];

    return suits.every(suit => suit === firstSuit);
}
