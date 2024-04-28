function isolateIt(arr){
    return arr.map(str => {
        const mid = Math.floor(str.length / 2);
        return str.length % 2 === 0 ?
            str.slice(0, mid) + "|" + str.slice(mid) :
            str.slice(0, mid) + "|" + str.slice(mid + 1);
    })
}