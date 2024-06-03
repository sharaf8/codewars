function sortTwisted37(array) {

    function twistNum(n) {
        return parseInt(n.toString().replace(/3/g, 'x').replace(/7/g, '3').replace(/x/g, '7'));
    }

    return array.slice().sort((a, b) => twistNum(a) - twistNum(b));
}
