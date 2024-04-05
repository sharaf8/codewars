function greet(name) {
    if(name && name.length > 0 && typeof name === "string"){
        return "hello " + name + "!";
    }
    return null;
}
