const change = {
    'penny': 0.01,
    'nickel': 0.05,
    'dime': 0.10,
    'quarter': 0.25,
    'dollar': 1.00
};

function changeCount(changeString) {
    const changeTypes = changeString.split(' ');
    let total = 0;

    for (let i = 0; i < changeTypes.length; i++) {
        const type = changeTypes[i];
        total += change[type];
    }

    const formattedTotal = `$${total.toFixed(2)}`;

    return formattedTotal;
}