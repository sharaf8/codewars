function fiveLine(s){
    let result = '';
    for(let i = 1; i <= 5; i++){
        result += `${s.trim().repeat(i)}\n`;
    }
    return result.trim();
}
