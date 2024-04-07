const sharePrice = (invested, changes) =>
    changes.reduce((price, change) => price * (1 + change / 100), invested).toFixed(2);
