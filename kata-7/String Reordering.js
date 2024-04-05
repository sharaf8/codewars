function sentence(lst) {
    const sortedList = lst.sort((a, b) => parseInt(Object.keys(a)[0]) - parseInt(Object.keys(b)[0]));

    const sentence = sortedList.map(obj => Object.values(obj)[0]).join(' ');

    return sentence;
}
