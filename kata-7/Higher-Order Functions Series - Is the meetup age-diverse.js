function isAgeDiverse(list) {
    const ages = {
        teens: {min: 13, max: 19},
        twenties: {min: 20, max: 29},
        thirties: {min: 30, max: 39},
        forties: {min:40, max:49},
        fifties: {min: 50, max: 59},
        sixties: {min: 60, max: 69},
        seventies: {min:70, max: 79},
        eighties: {min: 80, max: 89},
        nineties: {min: 90, max: 99},
        centenarian: {min: 100, max: 199}
    };

    return Object.values(ages).every(age =>
        list.some(dev => dev.age >= age.min && dev.age <= age.max));
}
