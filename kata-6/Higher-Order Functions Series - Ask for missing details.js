function askForMissingDetails(list) {
    return list.filter(dev => {
        if (dev.firstName === null) {
            dev.question = 'Hi, could you please provide your firstName.';
            return true;
        } else if (dev.language === null) {
            dev.question = 'Hi, could you please provide your language.';
            return true;
        } else if (dev.country === null) {
            dev.question = 'Hi, could you please provide your country.';
            return true;
        } else if (dev.lastName === null) {
            dev.question = 'Hi, could you please provide your lastName.';
            return true;
        } else if (dev.continent === null) {
            dev.question = 'Hi, could you please provide your continent.';
            return true;
        } else if (dev.age === null) {
            dev.question = 'Hi, could you please provide your age.';
            return true;
        }
        return false;
    });
}
