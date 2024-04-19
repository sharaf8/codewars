function scrollingText(text){
    const result = [];
    const textUpper = text.toUpperCase();
    for(let i = 0; i < textUpper.length; i++){
        result.push(textUpper.slice(i) + textUpper.slice(0, i));
    }

    return result;
}
