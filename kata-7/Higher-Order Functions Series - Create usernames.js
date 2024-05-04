function addUsername(list) {
    const year = new Date().getFullYear();
    return list.map(dev => {
        const birthYear = year - dev.age;
        const username = `${dev.firstName.toLowerCase()}${dev.lastName[0].toLowerCase()}${birthYear}`;
        return { ...dev, username };
    });
}
