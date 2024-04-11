function prevMultOfThree(n) {
    let strNum = n.toString();

    for (let i = strNum.length - 1; i >= 0; i--) {
        const num = parseInt(strNum.slice(0, i + 1));

        if (num % 3 === 0) {
            return num;
        }
    }

    return null;
}
