function sort(initialArray, sortingArray) {
    return initialArray.sort((a,b) => {
        return sortingArray[initialArray.indexOf(a)] - sortingArray[initialArray.indexOf(b)];
    })
}