function isVeryEvenNumber(n) {
    if (n < 10){
        return n % 2 === 0;
    }
    else {
        let sum = 0;
        let digs = n.toString().split('');
        for(const dig of digs){
            sum += parseInt(dig);
        }

        return isVeryEvenNumber(sum);
    }
}
