function wordSearch(query, seq){
    const result = [];
    let qu = query.toLowerCase();

    for (const char of seq){
        const se = char.toLowerCase();
        if (se.includes(qu)){
            result.push(char);
        }
    }

    return result.length < 1 ? ['Empty'] : result;
}
